const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
} = require('graphql')

// See examples/receipt.xml
const Receipt = new GraphQLObjectType({
  name: 'Receipt',
  description: 'A receipt for a purchase',
  fields: () => ({
    receipt_id: {
      type: GraphQLString,
      description: 'receipt id',
      resolve: source => {
        return source.response.receipt.ReceiptId._text
      },
    },
    reference_number: {
      type: GraphQLString,
      description: 'Reference number for this transaction',
      resolve: source => {
        return source.response.receipt.ReferenceNum._text
      },
    },
    response_code: {
      type: GraphQLString,
      description: 'response code',
      resolve: source => {
        return source.response.receipt.ResponseCode._text
      },
    },
    iso: {
      type: GraphQLString,
      description: 'iso',
      resolve: source => {
        return source.response.receipt.ISO._text
      },
    },
    auth_code: {
      type: GraphQLString,
      description: 'auth code',
      resolve: source => {
        return source.response.receipt.AuthCode._text
      },
    },
    transaction_time: {
      type: GraphQLString,
      description: 'transaction time',
      resolve: source => {
        return source.response.receipt.TransTime._text
      },
    },
    transaction_date: {
      type: GraphQLString,
      description: 'transaction date',
      resolve: source => {
        return source.response.receipt.TransDate._text
      },
    },
    transaction_type: {
      type: GraphQLString,
      description: 'transaction type',
      resolve: source => {
        return source.response.receipt.TransType._text
      },
    },
    complete: {
      type: GraphQLString,
      description: 'complete',
      resolve: source => {
        return source.response.receipt.Complete._text
      },
    },
    message: {
      type: GraphQLString,
      description: 'Message',
      resolve: source => {
        return source.response.receipt.Message._text
      },
    },
    amount: {
      type: GraphQLString,
      description: 'Transaction Amount',
      resolve: source => {
        return source.response.receipt.TransAmount._text
      },
    },
    card_type: {
      type: GraphQLString,
      description: 'card type',
      resolve: source => {
        return source.response.receipt.CardType._text
      },
    },
    transaction_id: {
      type: GraphQLString,
      description: 'transaction id',
      resolve: source => {
        return source.response.receipt.TransID._text
      },
    },
    timed_out: {
      type: GraphQLString,
      description: 'timed_out',
      resolve: source => {
        return source.response.receipt.TimedOut._text
      },
    },
    bank_totals: {
      type: GraphQLString,
      description: 'bank totals',
      resolve: source => {
        return source.response.receipt.BankTotals._text
      },
    },
    ticket: {
      type: GraphQLString,
      description: 'ticket',
      resolve: source => {
        return source.response.receipt.Ticket._text
      },
    },
    corporate_card: {
      type: GraphQLString,
      description: 'corporate card',
      resolve: source => {
        return source.response.receipt.CorporateCard._text
      },
    },
    card_level_result: {
      type: GraphQLString,
      description: 'card level result',
      resolve: source => {
        return source.response.receipt.CardLevelResult._text
      },
    },
    cavvResultCode: {
      type: GraphQLInt,
      description: 'CAVV result code', // TODO: I18n
      resolve: source => source.response.receipt.CavvResultCode._text,
    },
  }),
})

module.exports.default = Receipt
