var express = require('express');
var router = express.Router();
var Planta = require('../controllers/registo');

// GET /plantas/especies
router.get('/plantas/especies', function(req, res, next) {
  Planta.getEspecies()
    .then(especies => {
      res.jsonp(especies)
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na obtenção da lista de registos."})
    })
});

// GET /plantas/freguesias
router.get('/plantas/freguesias', function(req, res, next) {  
  Planta.getFreguesias()
    .then(freguesias => {
      res.jsonp(freguesias)
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na obtenção da lista de registos."})
    })
});

/* GET /plantas?implant=AAA | GET /contracts?especie=EEEE */
router.get('/plantas', function(req, res) {
  if (req.query.implant || req.query.especie) {
    if (req.query.implant) {
      Planta.getPlanta_Implant(req.query.implant)
        .then(dados => {
          res.status(200).json(dados)
        })
        .catch(erro => {
          res.status(520).json({erro: erro, mensagem: "Não consegui obter a lista de registos com aquela implantação"})
      })
    } else if (req.query.especie) {
      Planta.getPlanta_Especie(req.query.especie)
        .then(dados => {
          res.status(200).json(dados)
        })
        .catch(erro => {
          res.status(520).json({erro: erro, mensagem: "Não consegui obter a lista de registos referentes à espécie dada"})
      })
    } else {
      res.status(520).json({mensagem: "Query inválida."})
    }
  } else {
    
    Planta.list()
      .then(dados => {
        res.status(200).json(dados)
      })
      .catch(erro => {
        res.status(520).json({erro: erro, mensagem: "Não consegui obter a lista de registos."})
      })
  }
});

// GET /plantas
router.get('/plantas', function(req, res, next) {
  Planta.list()
    .then(registos => {
      res.jsonp(registos)
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na obtenção da lista de registos."})
    })
});

// GET /plantas/:id
router.get('/plantas/:id', function(req, res, next) {
  Planta.getPlanta(req.params.id)
    .then(registo => {
      res.jsonp(registo);
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na obtenção do registo pretendido"})
    })
});

// POST /plantas
router.post('/plantas',(req,res) => {
  Planta.addPlanta(req.body)
    .then(dados => {
      res.status(201).json(dados)
    })
    .catch(erro => {
      res.status(603).json({erro:erro,message: "Erro a adicionar um registo."})
    })

})

// DELETE /contracts/:id
router.delete('/plantas/:id',(req,res) => {
  Planta.deletePlanta(req.params.id)
    .then(dados => {
      res.json(dados)
    })
    .catch(erro => {
      res.status(605).json({erro:erro,message: "Erro a apagar o registo."})
    })

})



module.exports = router;
