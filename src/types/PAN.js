const { GraphQLScalarType } = require('graphql')
const valid = require('card-validator')

const PAN = new GraphQLScalarType({
  name: 'PAN',
  description: 'A Primary Account Number aka: a credit card number', //TODO: i18n
  serialize: String,
  parseValue: value => {
    let numberValidation = valid.number(value)
    if (numberValidation.isPotentiallyValid) {
      return value
    }
    return null
  },
  parseLiteral: ast => {
    let numberValidation = valid.number(ast.value)
    if (numberValidation.isPotentiallyValid) {
      return ast.value
    }
    return null
  },
})

module.exports.default = PAN
