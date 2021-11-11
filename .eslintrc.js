module.exports = {
  extends: [
    'next',
    'eslint:recommended',
    'plugin:tailwindcss/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    // your rules here
    'react/no-unescaped-entities': 'off',
    '@next/next/no-img-element': 'off'
  }
}
