var express = require('express');
var router = express.Router();

/* use node to direct all traffic to Angular for a SPA */
router.get('/', function(req, res, next) {
    res.render('index');
});

module.exports = router;
