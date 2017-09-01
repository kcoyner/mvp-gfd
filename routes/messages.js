/*
 * routes/messages.js
 */

var express = require('express');
var router = express.Router();

var Messages = require('../models/message');

router.get('/', function(req, res, next) {
  Messages.find()
    .exec(function(err, messages){
      if (err) {
        return res.status(500).json({
          title: 'An error occured on save: ',
          error: err
        });
      }
      res.status(200).json({
        message: 'Success',
        obj: messages
      });
    });
});

router.post('/', function(req, res, next) {
  var message = new Messages({
    content: req.body.content
  });
  message.save(function(err,result){
    if (err) {
      return res.status(500).json({
        title: 'An error occured on save: ',
        error: err
      });
    }
    res.status(201).json({
      message: 'Saved message: ',
      obj: result
    });
  });
});

module.exports = router;
