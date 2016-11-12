var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('<h1 style="text-align:center">Welcome to SmartBar API</h1>');
});

module.exports = router;
