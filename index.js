const express = require('express')
const app = express()
const bodyparser = require('body-parser')

//setando a engine EJS para uso
app.set('view engine','ejs')
//definindo para usar arquivos estaticos, tipo: css
app.use(express.static('public'))
//definindo para usar o body-parser
app.use(bodyparser.urlencoded({extended: false}))
//definindo para usar o body-parser em JSON
app.use(bodyparser.json())

app.get("/",(req,res) => {

    res.render("index")

})
//rota perguntar_
app.get("/perguntar",(req,res) => {

    res.render("perguntar")

})
//recebe os dados do form por isso é POST
app.post("/salvardados",(req,res) => {

    var titulo = req.body.titulo
    var descricao = req.body.descricao
    //res.send("Dados salvos:" + titulo + " " + descricao)
    res.render("salvadados",{
        titulo: titulo,
        descricao: descricao

    })

})

app.listen(3000,()=>{console.log("servidor ok")
})
