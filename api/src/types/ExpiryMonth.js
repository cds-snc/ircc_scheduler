const { GraphQLScalarType } = require("graphql");
const valid = require("card-validator");

const createExpiryMonth = t => {
  const ExpiryMonth = new GraphQLScalarType({
    name: "ExpiryMonth",
    description: t("types.expiryMonth.description"),
    serialize: String,
    parseValue: value => {
      let expiryMonthValidation = valid.expirationMonth(value);
      if (expiryMonthValidation.isValid) {
        return value
      }
      return null
    },

    parseLiteral: ast => {
      let expiryMonthValidation = valid.expirationMonth(ast.value);
      if (expiryMonthValidation.isValid) {
        return ast.value
      }
      return null
    },
  })

  return ExpiryMonth
}

module.exports.default = createExpiryMonth