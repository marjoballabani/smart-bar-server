/**
 * Created by Marjo on 9/12/2016.
 */
var express = require('express');
var router = express.Router();
var jwt    = require('jsonwebtoken');
var User = require('../models/user');

router.post('/', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token");
    // find the user
    User.findOne({
        username: req.body.username
    }, function (err, user) {

        if (err) throw err;

        if (!user) {
            res.json({success: false, message: 'Authentication failed. User not found.'});
        } else if (user) {
            console.log(user)
            // check if password matches
            if (user.password != req.body.password) {
                res.json({success: false, message: 'Authentication failed. Wrong password.'});
            } else {

                // if user is found and password is right
                // create a token
                console.log(req.app.get('superSecret'));
                var token = jwt.sign(user, req.app.get('superSecret'));

                // return the information including token as JSON
                delete user.password;

                res.json({
                    success: true,
                    message: 'Login successful',
                    token: token,
                    data: {
                        "_id": user._id,
                        "name": user.name,
                        "username": user.username,
                        "roleId": user.roleId,
                    }
                });
            }

        }

    });
});
module.exports = router;
