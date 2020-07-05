const express = require("express")

const server = express()


//Utilizando o Nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true,
})

//Renderizar as Páginas


//Configuração da Pasta Pública

server.use(express.static("public"))
//Como separamos nossos arquivos em novas pastas, isso fará com que nossos arquivos fiquem estáticos
//E com isso, disponíveis pra rodar nosso HTML funcionando normalmente!

//Habulidar uso de Req.body na nossa Aplicação
server.use(express.urlencoded({ extended:true }))

//Configurar Caminhos da Aplicação 
//Página Inicial

//Pegar o banco de Dados
const db = require("./database/db")


server.get("/", (req, res) => {
    return res.render("index.html", { title: "Ecoleta, coleta de resíduos de forma inteligente"})
})

server.get("/create-point", (req, res) => {
    
    return res.render("create-point.html") 
})
server.post("/savepoint", (req,res) => {
    //Inserir Dados no Banco de Dados
        const query = `
    INSERT INTO places(
        image,
        name,
        addres,
        addres2,
        state,
        city,
        items
    ) VALUES (
        ?,?,?,?,?,?,?);
`
const values = [
    req.body.image,
    req.body.name,
    req.body.addres,
    req.body.addres2,
    req.body.state,
    req.body.city,
    req.body.items
]

function afterInsertData(err){
    if(err){
        console.log(err)
        return res.send("Erro no Cadastro!")
    }
    return res.render("create-point.html", { saved: true })
}

    db.run(query, values,  afterInsertData)
})


server.get("/search", (req, res) => {

    const search = req.query.search

    if(search =="") {
        //Pesquisa Vazia
        return res.render("search-results.html", { total: 0 })
    }



    //Pegar os dados do banco de dados

    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err, rows){
        if (err){
            return console.log(err)
        }

        const total = rows.length
        //Mostrar a página HTML com os Dados do BANCO DE DADOS
        return res.render("search-results.html", { places: rows, total: total})
    })
    
    
})
//GET é um protocolo HTTP, ou seja, o / via get, vai responder uma função, no caso o req, res
//red = pedido/requisição e res = resposta do servidor


//Ligar o servidor
server.listen(3000)