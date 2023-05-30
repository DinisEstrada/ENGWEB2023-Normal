var axios = require('axios')

// Pedido da lista de registos
module.exports.list = () => {
    return axios.get('http://localhost:15030/plantas')
            .then(resposta => {
                return resposta.data
            })
            .catch(erro => {
                return erro
            })
}
module.exports.getRegisto = id => {
    return axios.get('http://localhost:15030/plantas/' + id)
            .then(resposta => {
                return resposta.data
            })
            .catch(erro => {
                return erro
            })
}
module.exports.getEspecie = idI => {
    return axios.get('http://localhost:15030/plantas?especie=' + idI)
            .then(resposta => {
                return resposta.data
            })
            .catch(erro => {
                return erro
            })
}