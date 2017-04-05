var mongoose = require('mongoose');

// mongoose.connect('mongodb://marjo:om3gachg@ds147965.mlab.com:47965/smartbar');
mongoose.connect('mongodb://localhost/smartbar');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'db connection error'));
db.once('open', function () {
	console.log('connected to database successfuly...')
})
