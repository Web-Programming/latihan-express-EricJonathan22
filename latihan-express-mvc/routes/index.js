
var express = require('express');
var router = express.Router();

var mainController = requiere("../controller/main");

/* GET home page. */
router.get('/', mainController.index);
router.get('/kontak', mainController.kontak);

module.exports = router;
