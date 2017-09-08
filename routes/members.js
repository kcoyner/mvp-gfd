/*
 * routes/members.js
 */

var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

var User = require('../models/user');

router.get('/', function(req, res, next) {
  User.find()
    // populate expands the reference to the user fields
    //.populate('user', 'firstName')
    .exec(function(err, members){
      if (err) {
        return res.status(500).json({
          title: 'An error occured on get: ',
          error: err
        });
      }
      res.status(200).json({
        message: 'Success',
        obj: members
      });
    });
});

module.exports = router;
