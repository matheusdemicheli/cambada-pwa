var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('frase-do-dia', {titulo: 'Frase do Dia'});
});

module.exports = router;
