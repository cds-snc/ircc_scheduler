const { GraphQLScalarType } = require("graphql");
const valid = require("card-validator");

const createExpiryYear = t => {
  const ExpiryYear = new GraphQLScalarType({
    name: "ExpiryYear",
    description: t("types.expiryYear.description"),
    serialize: String,
    parseValue: value => {
      let expiryYearValidation = valid.expirationYear(value);
      if (expiryYearValidation.isValid && value.length <= 2) {
        return value
      }
      return null
    },

    parseLiteral: ast => {
      let expiryYearValidation = valid.expirationYear(ast.value);
      if (expiryYearValidation.isValid && ast.value.length <= 2) {
        return ast.value
      }
      return null
    },
  })

  return ExpiryYear
}

module.exports.default = createExpiryYear