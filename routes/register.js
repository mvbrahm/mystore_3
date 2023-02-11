var express = require('express');
var router = express.Router();
var api_functions = require('../public/js/api_functions');

router.get('/', function(req, res, next) {
  res.render('register', { title: 'Register' });
});

module.exports = router