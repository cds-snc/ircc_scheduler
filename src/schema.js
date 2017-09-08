const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLNonNull,
} = require('graphql')
const convert = require('xml-js')
const fetch = require('isomorphic-fetch')
const Receipt = require('./types/Receipt').default
const PAN = require('./types/PAN').default

// XXX: Is it not possible to have a mutation only schema?
var query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    hello: {
      type: GraphQLString,
      resolve: (source, args, context, info) => 'world',
    },
  },
})

// See examples/payment.xml
var mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    purchase: {
      args: {
        expiry: {
          description: 'the date the card expires in the format YY/MM', // TODO: I18n this.
          type: new GraphQLNonNull(GraphQLString),
        },
        description: {
          description: 'a description of the transaction', // TODO: I18n this.
          type: new GraphQLNonNull(GraphQLString),
        },
        primaryAccountNumber: {
          description: 'the credit card number', // TODO: I18n this.
          type: new GraphQLNonNull(PAN),
        },
        amount: {
          description: 'the amount of the the transaction', // TODO: I18n this.
          type: new GraphQLNonNull(GraphQLFloat),
        },
        orderID: {
          description: 'order id', // TODO: I18n this.
          type: new GraphQLNonNull(GraphQLString),
        },
      },
      type: Receipt,
      resolve: async (source, args, context, info) => {
        let xml = convert.js2xml(
          {
            request: {
              store_id: { _text: context.storeID },
              api_token: { _text: context.apiToken },
              purchase: {
                order_id: { _text: args.orderID },
                amount: { _text: args.amount.toFixed(2) },
                pan: { _text: args.primaryAccountNumber },
                expdate: { _text: args.expiry.replace('/', '') },
                dynamic_description: { _text: args.description },
                crypt_type: { _text: '7' }, // SSL-enabled vendor
                cust_id: { _text: 'cust 1' },
              },
            },
          },
          { compact: true },
        )

        let response = await fetch(
          `https://${context.apiHost}/gateway2/servlet/MpgRequest`,
          {
            method: 'post',
            headers: {
              'Content-Type': 'text/xml',
              'User-agent': 'IRCC API',
            },
            body: xml,
          },
        )

        let text = await response.text()
        return convert.xml2js(text, { compact: true })
      },
    },
  },
})

module.exports.default = new GraphQLSchema({ query, mutation })
