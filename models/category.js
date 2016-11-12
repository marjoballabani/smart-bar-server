var mongoose = require('mongoose');

var categorySchema = mongoose.Schema({
	name: String,
	description: String
},{
	collection: 'category'
})

module.exports = mongoose.model('category', categorySchema);