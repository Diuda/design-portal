var express = require('express');
var router = express.Router();




var UPS = require('../controller/ups.controller.js');

// router.get('/search', UPS);


router.post('/search', UPS.addUPS)



module.exports = router;