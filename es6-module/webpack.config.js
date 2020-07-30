var path = require('path');

module.exports = {
   entry: {
      app: './js/main.js'
   },
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'main.js'
   },
   mode:'development',
   module: {
      rules: [
         {
            test: /\.js$/,
            include: path.resolve(__dirname, 'js'),
            loader: 'babel-loader',
            query: {
               presets: ['@babel/preset-env']
            }
         }
      ]
   }
};