var auth = require('./routes/auth');
var login = require('./routes/login');
var table = require('./routes/table');
var index = require('./routes/index');
var category = require('./routes/category');
var user = require('./routes/user');

var routConfig = function (app) {
	app.use('/', auth);
	app.use('/login', login);
	app.use('/table', table);
	app.use('/category', category);
	app.use('/user', user);

};

module.exports = routConfig;
