module.exports = {
  entry: './src/scripts/app.js',
  output: {
    path: './public/js/',
    filename: 'app.js'
  },
  devServer: {
    contentBase: "./public",
    inline: true,
    port: 4444
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}
