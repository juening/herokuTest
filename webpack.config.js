module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    extensions: ['.js', '.jsx', '']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'babel-preset-stage-1']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules)/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
