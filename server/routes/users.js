const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
	extended: false
}));
router.route('/users').post((req, res) => {
	console.log(req.body);
	let usersArr = [
	{
		name: "name",
		id: 220
	},
	{
		name: "name2",
		id: 554
	}];
	usersArr.push(req.body);
	res.send(usersArr);
});

module.exports = router;