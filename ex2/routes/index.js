var express = require('express');
var router = express.Router();
var env = require('../config/env');
var Planta = require('../controllers/registo');
var axios = require('axios');

/* GET / */
router.get('/', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  Planta.list()
    .then(registos => {
      res.render('index', { rlist: registos, d: data });
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na obtenção da lista de registos"})
    })
});

/* GET /plantas/:id */
router.get('/:id', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  Planta.getRegisto(req.params.id)
    .then(dados => {
      res.render('registo', { r: dados, d: data }); 
    })
    .catch(erro => res.status(602).json(({erro: erro})))
});

router.get('/especies/:nespc', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  Planta.getEspecie(req.params.nespc)
    .then(dados => {
      res.render('especie', { r: dados, d: data }); 
    })
    .catch(erro => res.status(602).json(({erro: erro})))
});
module.exports = router;
