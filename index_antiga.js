const express = require('express')
const app = express()

//setando a engine EJS para uso
app.set('view engine','ejs')
//definindo para usar arquivos estaticos, tipo: css
app.use(express.static('public'))

app.get("/",(req,res) => {

    var aplication = "v1"
    var kind = "Pod"
    var exibirMsg = false

    var produtos =  [
        { nome : "Leite", preco : 3.00},
        { nome : "Coca-Cola", preco : 2.00},
        { nome : "Chocolate", preco : 5.00},
    ]

    //renderizando um HTML da pasta "views"
    res.render("index",{
        aplication : aplication,
        kind : kind,
        msg : exibirMsg,
        produtos: produtos
    })

})
app.listen(3000,()=>{console.log("servidor ok")
})
