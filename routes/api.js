var express = require('express');
var router = express.Router();




var UPS = require('../controller/ups.controller.js');

// router.get('/search', UPS);


router.post('/add', UPS.addUPS)

router.post('/search', UPS.searchUPS)



module.exports = router;