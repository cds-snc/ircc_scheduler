module.exports = {
  extends: ['standard', 'plugin:react/recommended'],
  plugins: ['react', 'jest'],
  env: {
    'jest/globals': true,
  },
  rules: {
    "comma-dangle": ["error", "always-multiline"]
  }
}
