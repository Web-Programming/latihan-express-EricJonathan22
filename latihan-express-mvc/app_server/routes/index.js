
var express = require('express');
var router = express.Router();

var mainController = require("./app_server/controllers/main");


/* GET home page. */
router.get('/', mainController.index);
router.get('/kontak', mainController.kontak);

module.exports = router;
