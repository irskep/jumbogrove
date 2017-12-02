// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // omg fuck off eslint
    'indent': 0,
    'comma-dangle': 0,
    'semi': 0,
    'eol-last': 0,
    'space-before-function-paren': 0,
    'no-trailing-spaces': 0,
    'quotes': 0,
    'no-return-assign': 0,
    'no-multiple-empty-lines': 0,
    'import/first': 0,
    'object-property-newline': 0,
    'no-unreachable': 0,
    'padded-blocks': 0,

    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
