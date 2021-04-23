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
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          { loader: 'sass-loader' }
        ]
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
