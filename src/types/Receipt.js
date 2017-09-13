const { GraphQLObjectType, GraphQLString, GraphQLInt } = require('graphql')

const createReceipt = t => {
  // See examples/receipt.xml
  const Receipt = new GraphQLObjectType({
    name: 'Receipt',
    description: t('types.receipt.description'),
    fields: () => ({
      receiptID: {
        type: GraphQLString,
        description: t('types.receipt.receiptID'),
        resolve: source => {
          return source.response.receipt.ReceiptId._text
        },
      },
      referenceNumber: {
        type: GraphQLString,
        description: t('types.receipt.referenceNumber'),
        resolve: source => {
          return source.response.receipt.ReferenceNum._text
        },
      },
      responseCode: {
        type: GraphQLString,
        description: t('types.receipt.responseCode'),
        resolve: source => {
          return source.response.receipt.ResponseCode._text
        },
      },
      iso: {
        type: GraphQLString,
        description: t('types.receipt.iso'),
        resolve: source => {
          return source.response.receipt.ISO._text
        },
      },
      authCode: {
        type: GraphQLString,
        description: t('types.receipt.authCode'),
        resolve: source => {
          return source.response.receipt.AuthCode._text
        },
      },
      transactionTime: {
        type: GraphQLString,
        description: t('types.receipt.transactionTime'),
        resolve: source => {
          return source.response.receipt.TransTime._text
        },
      },
      transactionDate: {
        type: GraphQLString,
        description: t('types.receipt.transactionDate'),
        resolve: source => {
          return source.response.receipt.TransDate._text
        },
      },
      transactionType: {
        type: GraphQLString,
        description: t('types.receipt.transactionType'),
        resolve: source => {
          return source.response.receipt.TransType._text
        },
      },
      complete: {
        type: GraphQLString,
        description: t('types.receipt.complete'),
        resolve: source => {
          return source.response.receipt.Complete._text
        },
      },
      message: {
        type: GraphQLString,
        description: t('types.receipt.message'),
        resolve: source => {
          return source.response.receipt.Message._text
        },
      },
      amount: {
        type: GraphQLString,
        description: t('types.receipt.amount'),
        resolve: source => {
          return source.response.receipt.TransAmount._text
        },
      },
      cardType: {
        type: GraphQLString,
        description: t('types.receipt.cardType'),
        resolve: source => {
          return source.response.receipt.CardType._text
        },
      },
      transactionID: {
        type: GraphQLString,
        description: t('types.receipt.transactionID'),
        resolve: source => {
          return source.response.receipt.TransID._text
        },
      },
      timedOut: {
        type: GraphQLString,
        description: t('types.receipt.timedOut'),
        resolve: source => {
          return source.response.receipt.TimedOut._text
        },
      },
      bankTotals: {
        type: GraphQLString,
        description: t('types.receipt.bankTotals'),
        resolve: source => {
          return source.response.receipt.BankTotals._text
        },
      },
      ticket: {
        type: GraphQLString,
        description: t('types.receipt.ticket'),
        resolve: source => {
          return source.response.receipt.Ticket._text
        },
      },
      corporateCard: {
        type: GraphQLString,
        description: t('types.receipt.corporateCard'),
        resolve: source => {
          return source.response.receipt.CorporateCard._text
        },
      },
      cardLevelResult: {
        type: GraphQLString,
        description: t('types.receipt.cardLevelResult'),
        resolve: source => {
          return source.response.receipt.CardLevelResult._text
        },
      },
      cavvResultCode: {
        type: GraphQLInt,
        description: t('types.receipt.cavvResultCode'),
        resolve: source => source.response.receipt.CavvResultCode._text,
      },
    }),
  })

  return Receipt
}

module.exports.default = createReceipt
