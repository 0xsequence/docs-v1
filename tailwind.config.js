/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false, // disable Tailwind's reset
  },
  content: ['./src/**/*.{js,jsx,ts,tsx}', '../docs/**/*.mdx'], // markdown stuff is in ../docs, not /src
  darkMode: ['class', '[data-theme="dark"]'], // hooks into docusaurus' dark mode settigns
  theme: {
    extend: {
      fontFamily: {
        ['inter']: 'Inter',
        ['roboto']: 'Roboto Mono',
      },
      screens: {
        ['mobile-nav']: '997px'
      },
      colors: {
        ['off-black']: '#111111',
        ['off-white']: '#F8F5F1',
        ['white-80']: '#cfcfcf',
        ['white-50']: '#888888',
        ['white-25']: '#4D4D4D',
        ['black-80']: '#333333',
        ['black-50']: '#808080',
        ['black-25']: '#BFBFBF',
      }
    },
  },
  plugins: [],
}
