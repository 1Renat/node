const path = require('path');

module.exports = {
   devtool: 'inline-soure-map',
   entry: {
   	js: path.join(__dirname, 'client/client.js')//входящий файл
   },
   output: {
   	path: path.join(__dirname, 'static'),//вывод
   	filename: 'bundle.js'
   },
  
   module: {
   	loaders: [
   	{test: /\.js$/, loader: 'babel-loader'}

   	]
   }
}