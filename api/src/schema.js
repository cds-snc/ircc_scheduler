const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLNonNull,
} = require('graphql')
const convert = require('xml-js')

const createSchema = t => {
  const Receipt = require('./types/Receipt').default(t)
  const PAN = require('./types/PAN').default(t)
  const ExpiryYear = require('./types/ExpiryYear').default(t)
  const ExpiryMonth = require('./types/ExpiryMonth').default(t)

  // XXX: Is it not possible to have a mutation only schema?
  var query = new GraphQLObjectType({
    name: 'Query',
    fields: {
      hello: {
        type: GraphQLString,
        resolve: () => 'world',
      },
    },
  })

  // See examples/payment.xml
  var mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
      purchase: {
        description: t('mutation.fields.purchase.description'),
        args: {
          expiryYear: {
            description: t('mutation.fields.purchase.args.expiryYear'),
            type: new GraphQLNonNull(ExpiryYear),
          },
          expiryMonth: {
            description: t('mutation.fields.purchase.args.expiryMonth'),
            type: new GraphQLNonNull(ExpiryMonth),
          },
          description: {
            description: t('mutation.fields.purchase.args.description'),
            type: new GraphQLNonNull(GraphQLString),
          },
          primaryAccountNumber: {
            description: t('mutation.fields.purchase.args.pan'),
            type: new GraphQLNonNull(PAN),
          },
          amount: {
            description: t('mutation.fields.purchase.args.amount'),
            type: new GraphQLNonNull(GraphQLFloat),
          },
          orderID: {
            description: t('mutation.fields.purchase.args.orderID'),
            type: new GraphQLNonNull(GraphQLString),
          },
        },
        type: Receipt,
        resolve: async (_, args, context) => {
          let xml = convert.js2xml(
            {
              request: {
                store_id: { _text: context.storeID },
                api_token: { _text: context.apiToken },
                purchase: {
                  order_id: { _text: args.orderID },
                  amount: { _text: args.amount.toFixed(2) },
                  pan: { _text: args.primaryAccountNumber },
                  expdate: { _text: args.expiryYear + args.expiryMonth },
                  dynamic_description: { _text: args.description },
                  crypt_type: { _text: '7' }, // SSL-enabled vendor
                  cust_id: { _text: 'cust 1' },
                },
              },
            },
            { compact: true },
          )

          let response = await context.fetch(
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
          let res = convert.xml2js(text, { compact: true })

          // Handles level 2 errors. Refer to:
          // https://developer.moneris.com/More/Testing/Response%20Handling
          let { receipt } = res.response
          if (
            receipt.Complete._text === 'false' &&
            receipt.TimedOut._text === 'false'
          ) {
            throw new Error(res.response.receipt.Message._text)
          }
          return res
        },
      },
    }),
  })

  return new GraphQLSchema({ query, mutation })
}

module.exports.default = createSchema
