module.exports = {
  purge: [
    './src/**/*.njk'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Open Sans', 'sans-serif'],
      'serif': ['serif'],
      'heading': ['Lato', 'san-serif']
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px'
    },
    container: {
      'padding': '1rem'
    },
    extend: {
      colors: {
        'crest-black': '#2b2b2b',
        'crest-light-gray': '#e6e6e6',
        'crest-blue': '#447ab1',
        'crest-light-blue': '#327dcb',
        'crest-gold': '#ffcc7f',
        'crest-dark-gold': '#da8609'
      },
    },
  },
  variants: {
    extend: {
      'visibility': ['group-hover'],
      'display': ['group-hover']
    }
  },
  plugins: [],
}