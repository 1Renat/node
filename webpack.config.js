const path = require('path');

module.exports = {
   entry: {
   	js: path.join(__dirname, 'client/client.js')//входящий файл
   },
   output: {
   	path: path.join(__dirname, 'static/js'),//вывод
   	filename: 'bundle.js'
   },
   presets:[
   ['es2015', {'modules': false}]
   ],
   module: {
   	loaders: [
   	{test: /\.js$/, loader: 'babel-loader'}

   	]
   }
}