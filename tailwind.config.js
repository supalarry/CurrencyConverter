module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'blue-ady': '#01122B',
        'green-ady': '#21BE58',
        'white-ady': '#FFFFFE',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
