// This webpack config is used to compile the JS for the CMS
const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const production = process.env.NODE_ENV === 'production'
const mode = production ? 'production' : 'development'
console.log(`Building CMS in ${mode} mode`)

module.exports = {
  entry: './cms.js',
  output: {
    filename: 'cms.bundle.js',
    path: path.resolve(__dirname, '../public/admin/'),
  },
  mode,
  stats: { warnings: false, children: false },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: [
            '@babel/plugin-proposal-object-rest-spread',
            '@babel/plugin-proposal-class-properties',
          ],
        },
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [
            'style-loader',
            { loader: 'css-loader', options: { importLoaders: 1 } },
            'postcss-loader',
          ],
        })
      },
      {
        test: /\.sass$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              // Prefer `dart-sass`
              implementation: require('node-sass'),
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff(2)?|ttf|eot)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'cms.bundle.css',
    }),
  ],
}
