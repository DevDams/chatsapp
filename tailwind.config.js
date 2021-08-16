module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'dark': '#252525',
        'myblack': '#0d0d0d',
        'mywhite': '#eaeaea',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
