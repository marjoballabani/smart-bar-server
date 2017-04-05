var auth = require('./routes/auth');
var login = require('./routes/login');
var table = require('./routes/table');
var index = require('./routes/index');
var category = require('./routes/category');
var user = require('./routes/user');

var routConfig = function (app) {
	app.use('/api', auth);
	app.use('/api/login', login);
	app.use('/api/table', table);
	app.use('/api/category', category);
	app.use('/api/user', user);

};

module.exports = routConfig;
