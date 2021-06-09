//servidor
const express = require("express")
const server = express()

const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require("pages")

//configurar nunjukcs (template engine)
const nunjucks = require("nunjucks")
nunjucks.configure("views", {
    express: server,
    noCache: true,
})

//inicio e configuração do servidor
server
//receber os dados do req.body
.use(express.urlencoded({ extended: true}))
//configurar arquivos estáticos (css, scripts, imagens)
.use(express.static("../public"))
//rotas da aplicação
.get("../index", pageLanding)
.get("views/study", pageStudy)
.get("views/give-classes", pageGiveClasses)
.post("views/save-classes", saveClasses)
//start do servidor
.listen(5500)