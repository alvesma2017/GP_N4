const Sequelize = require('sequelize')
const connection = require('./database')

//criando a tabela no BD
const Pergunta = connection.define('pergunta',{
//criando campos
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})
//o force não forcará a criacao da tabela caso ela exista/o then cria a tabela caso nao exista
Pergunta.sync({force: false}).then(() => {})
module.exports = Pergunta