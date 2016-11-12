/**
 * Created by Marjo on 9/12/2016.
 */
var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    "name" : String,
    "username" : String,
    "password" : String,
    "roleId" : String
}, {
    collection: 'user'
});

var User = module.exports = mongoose.model('user', userSchema);