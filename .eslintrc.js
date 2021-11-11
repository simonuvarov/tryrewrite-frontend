module.exports = {
  extends: ['next', 'eslint:recommended', 'plugin:tailwindcss/recommended'],
  rules: {
    // your rules here
    'react/no-unescaped-entities': 'off',
    '@next/next/no-img-element': 'off'
  }
}
