// Import dependencies
const path = require('path');
const MiniCssExtractPlugin  = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const config = {
  entry: './src/index.js',

  output: {
        path: path.resolve(__dirname,'build'),
        filename: 'bundle.js',
    },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },

      {
        test:/\.(s*)css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [{
          loader: 'url-loader',
            options: {
              limit: 8000, 
              name: 'images/[hash]-[name].[ext]'
            }
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({filename: 'style.css'})
  ]
};

module.exports = config;
