const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'agenda-pet',
    password: 'Ingrid$F.19',
    database: 'agenda-petshop'
}) 

module.exports = conexao