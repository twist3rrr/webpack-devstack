module.exports = {
    plugins: {
      'postcss-cssnext': {
        'browserslist': ['cover 99.5%'],
        'warnForDuplicates': false
      },
      'cssnano': {},
      'postcss-reporter': {},
      'postcss-browser-reporter': {}
    }
  }