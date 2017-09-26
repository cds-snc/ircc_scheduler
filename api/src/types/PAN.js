const { GraphQLScalarType } = require('graphql')
const valid = require('card-validator')

const createPAN = t => {
  const PAN = new GraphQLScalarType({
    name: 'PAN',
    description: t('types.pan.description'),
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
  return PAN
}

module.exports.default = createPAN
