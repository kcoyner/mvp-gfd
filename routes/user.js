/*
 * routes/user.js
 */

var bcrypt = require('bcryptjs');
var express = require('express');
var router = express.Router();

var User = require('../models/user');

var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

router.post('/', function(req, res, next) {
  var user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: bcrypt.hashSync(req.body.password, 10),
    email: req.body.email
  });
  user.save(function(err, result) {

    if (err) {
      console.log('kbcaba: ', user);
      return res.status(500).json({
        title: 'An error occured on saving a new user: ',
        error: err
      });
    }
    res.status(201).json({
      message: 'User created',
      obj: result
    });
  });

});

module.exports = router;
