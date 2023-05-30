var Planta = require("../models/registo");

// Lista de Registos
//GET /plantas
module.exports.list = () => {
    return Planta
    .find() 
     .then(dados=>{
         return dados
     })
     .catch(erro =>{
         return erro
     })
 
}
// GET /plantas/:id
module.exports.getPlanta = id => {
    return Planta
    .findOne({_id: id})
    .then(dados=>{
        return dados
    })
    .catch(erro =>{
        return erro
    })
}


// GET /contracts?especie=EEEE
module.exports.getPlanta_Especie = param => {
    return Planta
        .find({ "Espécie": param })
        .then(dados => {
            return dados;
        })
        .catch(erro => {
            return erro;
        });
};
// GET /plantas?implant=AAA
module.exports.getPlanta_Implant = param => {
    return Planta
        .find({ "Implantação": param})
        .then(dados => {
            return dados;
        })
        .catch(erro => {
            return erro;
        });
};
// GET /plantas/especies
module.exports.getEspecies = () => {
    return Planta
        .aggregate([ { $group: { _id: "$Espécie" } }, { $sort: { _id: 1 } }])
        .then(cursos => {
            return cursos;
        })
        .catch(erro => {
            return erro;
        });
};
// GET /plantas/freguesias
module.exports.getFreguesias = () => {
    return Planta
    .aggregate([ { $group: { _id: "$Freguesia" } }, { $sort: { _id: 1 } }])
        .then(inst => {
            return inst;
        })
        .catch(erro => {
            return erro;
        });
};
// POST /plantas
module.exports.addPlanta = p => {
    return Planta.create(p)
    .then(dados=>{
        return dados
    })
    .catch(erro =>{
        return erro
    })
}
// DELETE /plantas/:id
module.exports.deletePlanta = id => {
    return Planta.deleteOne({_id:id})
    .then(dados=>{
        return dados
    })
    .catch(erro =>{
        return erro
    })
}