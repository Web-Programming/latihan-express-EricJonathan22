var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Beranda' });
});


router.get('/paketwisata', function(req, res, next) {
  let listpaketwisata =[
  {'nama' : 'Wisata pulau kemaro','harga' : 500000},
  {'nama' : 'Wisata Punti Kayu','harga' : 250000},
  {'nama' : 'Wisata Jakbaring','harga' : 100000},

  ]
  res.render('paketwisata', {
     title: 'paketwisata',
     listpaketwisata : listpaketwisata
    });
});

router.get('/orderpaket', function(req, res, next) {
  res.render('orderpaket', { title: 'form pemesanan paket' });
});

router.get('/orderdetail', function(req, res, next) {
  res.render('orderdetail', { title: 'detail pemesanan paket' });
});
module.exports = router;