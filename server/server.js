const express = require('express');
const path = require('path');

const app = express();
console.log(express);
app.use('/static', express.static(path.join(__dirname, '../static')));
app.post('/users', require('./routes/users.js'));
app.get('/',(req, res) => {
	res.sendFile(path.join(__dirname, '../static/index.html'))
});

app.listen(8080, () => {
	console.log('server on 8080');
})