'user strict';

const mysql = require('mysql');

//conecção com o banco mysql
const conn = mysql.createPool({
    connectionLimit : 10,
    host     : 'mynewsdb.cqmj9g4tjztr.sa-east-1.rds.amazonaws.com',
    user     : 'lipeflorentino',
    password : 'cnbm1001',
    database : 'newsdb'
});

// conectando com a base de dados
conn.getConnection(function(err) {
    if (err) throw err;
    console.log('conectou!');
});

module.exports = conn;