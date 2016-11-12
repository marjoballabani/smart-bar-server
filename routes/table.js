var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;
var Table = require('../models/table');

/* get all tables */
router.get('/', function(req, res, next) {
	Table.find({}, function(err, data){
		res.json(data);
	}) 
});

/* Get table by id */
router.get('/:id', function(req, res, next) {
	var id = (req.params.id.length == 12)  ? req.params.id : '000000000000';
	Table.find({'_id': new ObjectId(id)}, function(err, data){
		res.json(data);
	}) 
});

module.exports = router;
