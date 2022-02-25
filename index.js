const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const connection = require('./database/database')
const perguntamodel1 = require('./database/Pergunta')
const respostamodel1 = require('./database/Resposta')

connection
    .authenticate()
    .then (() => {

        console.log("conexão ok")
    })
    .catch((msgErro) => {
        console.log(msgErro)

    })
 

//setando a engine EJS para uso
app.set('view engine','ejs')
//definindo para usar arquivos estaticos, tipo: css
app.use(express.static('public'))
//definindo para usar o body-parser
app.use(bodyparser.urlencoded({extended: false}))
//definindo para usar o body-parser em JSON
app.use(bodyparser.json())

app.get("/",(req,res) => {

    perguntamodel1.findAll({raw: true, order: [

        ['id','desc']

    ]}).then(perguntas =>{
        res.render("index",{
            perguntas: perguntas
        })
    })
    

})

app.get("/perguntar",(req,res) => {

    res.render("perguntar")

})
//recebe os dados do form por isso é POST
app.post("/salvardados",(req,res) => {

    var titulo = req.body.titulo
    var descricao = req.body.descricao
    //insert no bd
    perguntamodel1.create({

        titulo: titulo,
        descricao: descricao
    }).then(() =>{
        res.redirect("/")
    })

})
//where para chamar o id da pergunta
app.get("/perguntas/:id",(req,res) => {

    var id = req.params.id
    perguntamodel1.findOne({
        where: {id: id}
    }).then(pergunta => {
        if(pergunta != undefined){
            res.render("pergunta",{
                pergunta: pergunta
            })
        }else{
            res.redirect("/")
        }

    })

})



app.listen(3000,()=>{console.log("servidor ok")
})
