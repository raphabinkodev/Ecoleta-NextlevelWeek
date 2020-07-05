//importar a dependência do sqlite3
const sqlite3 = require("sqlite3").verbose();

//criar o objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")
module.exports = db
//Utilizar o objeto de banco de dados, para nossas operações
db.serialize(() =>{
    //Com comandos SQL
    //1 - Criar Tabela
//    db.run(`
//        CREATE TABLE IF NOT EXISTS places (
//            id INTEGER PRIMARY KEY AUTOINCREMENT,
//            image TEXT,
//            name TEXT,
//            addres TEXT,
//            addres2 TEXT,
//            state TEXT,
//            city TEXT,
//            items TEXT
//        );
//    `)
    //2 - Inserir Dados na Tabela
//    const query = `
//    INSERT INTO places(
//        image,
//        name,
//        addres,
//        addres2,
//        state,
//        city,
//        items
//    ) VALUES (
//        ?,?,?,?,?,?,?);
//`
//const values = [
//    "https://images.unsplash.com/photo-1518792528501-352f829886dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
//    "Papersider",
//    "Guilherme Gembala, Jardim América",
//    "260",
//    "Santa Catarina",
//    "Rio do Sul",
//    "Papéis e Papelão"
//]

//function afterInsertData(err){
//    if(err){
//        return console.log(err)
//    }
//    console.log("Cadastrado com Sucesso")
//    console.log(this)
//}

    //db.run(query, values,  afterInsertData)

    //3 - Consultar Dados da Tabela

    //db.all(`SELECT * FROM places`, function(err, rows){
    //    if (err){
    //        return console.log(err)
    //    }

    //    console.log("Aqui estão seus registros:")
    //    console.log(rows)
    //})


    //4 - Deletar dados da Tabela

    //    db.run(`DELETE FROM places WHERE id = ?`, [7], function(err){
    //    if(err) {
    //        return console.log(err)
    //    }

    //    console.log("Registros deletados com sucesso")
    //})

    
})