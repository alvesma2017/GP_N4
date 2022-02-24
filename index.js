const express = require('express')
const app = express()

//setando a engine EJS para uso
app.set('view engine','ejs')

app.get("/",(req,res)=>{

    //renderizando um HTML que está na subpasta "principal" da pasta "views"
    res.render("principal/perfil")

})
app.listen(3000,()=>{console.log("servidor ok")
})
