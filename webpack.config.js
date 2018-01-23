const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const CSSExtract = new ExtractTextPlugin('styles.css');

return module.exports = {
   entry: './src/app.js',
   output: {
      path: path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js'
   },
   module: {
      rules: [
         {
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
         },
         {
            test: /\.s?css$/,
            use: CSSExtract.extract({
               use: [
                  {
                     loader: 'css-loader',
                     options: {
                        sourceMap: true
                     }
                  },
                  {
                     loader: 'sass-loader',
                     options: {
                        sourceMap: true
                     }
                  }
               ]
            })
         }
      ]
   },
   plugins: [
      CSSExtract,
   ],
   devtool: 'inline-source-map',
   devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      publicPath: '/dist/'
   }
}