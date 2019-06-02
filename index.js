const rules = require('./rules')

module.exports = {
  parser: "@typescript-eslint/parser",
  
  plugins: ["@typescript-eslint"],
  
  root: true,
  
  rules,
}
