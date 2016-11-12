var express = require('express');
var router = express.Router();
var Category = require('../models/category')


/* Get all categorys */
router.get('/', function(req, res, next) {
	Category.find({}, function(err, data){
		res.json(data);
	}) 
});

module.exports = router;
