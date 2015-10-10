module.exports = {
  js: {
    src: './src/js/**',
    dest: './build/js',  },

  webpack: {
    entry: './src/js/app.es6',
    output: {
      filename: 'bundle.js'
    },

    resolve: {
      extensions: ['', '.js', '.es6', '.jade']
    },

    module: {
      loaders: [
        { test: /\.jade$/, loader: 'react-jade-loader' },
        { test: /\.es6/, loader: 'babel-loader'}
      ]
    }
  }
}
