var express = require('express');
var router = express.Router();
var images = require('./../controllers/readimages');
/* GET images listing. */
router.get('/', function(req, res, next) {
  images.getImages(req, res);
  //res.send('getting images...');
});

module.exports = router;