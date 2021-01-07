// This webpack config is used to compile the JS for the CMS
const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const production = process.env.NODE_ENV === 'development'
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
  plugins: [new MiniCssExtractPlugin({ filename: 'cms.bundle.css'})],
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
        use: 
        [
          MiniCssExtractPlugin.loader,
          'css-loader',
          // { loader: 'css-loader', options: {importLoaders: 1 } },
          'postcss-loader',
        ],
      },
      {
        test: /\.sass$/,
          use: [
            MiniCssExtractPlugin.loader,
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
  }
}
