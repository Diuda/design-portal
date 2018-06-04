var express = require('express');
var router = express.Router();



var UPS = require('../controller/ups.controller.js');

//var test=require('../controller/ins.js');

// router.get('/search', UPS);


router.post('/add', UPS.addUPS)

router.post('/search', UPS.searchUPS)

//router.post('/test',test.testinsert)


module.exports = router;