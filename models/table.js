var mongoose = require('mongoose');

var tableSchema = mongoose.Schema({
	name: String,
	position: Number,
	status: Number
}, {
	collection: 'table'
})

var Table = module.exports = mongoose.model('table', tableSchema);