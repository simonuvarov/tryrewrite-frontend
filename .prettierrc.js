module.exports = {
  ...require('prettier-config-standard'),
  plugins: ['prettier-plugin-tailwindcss'],
  printWidth: 80,
  purge: ['./src/**/*.{js,jsx,ts,tsx}']
}
