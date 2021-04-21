const { join, resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: resolve(__dirname, 'src/index.tsx'),
  output: {
    path: join(__dirname, 'dist'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.s(a|c)ss$/,
        loader: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.sass', '.scss', '.ts', '.tsx'],
    alias: {
      src: resolve(__dirname, 'src'),
      lib: resolve(__dirname, 'lib'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Double - Challenge',
    }),
  ],
}
