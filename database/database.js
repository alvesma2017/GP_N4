//npm install --save sequelize
//npm install --save mysql2

const Sequelize = require('sequelize')

const connection = new Sequelize('guia_perguntas','root','wcawca#023',{

    host: 'localhost',
    dialect: 'mysql'

})

module.exports = connection