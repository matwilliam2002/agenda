// import mysql from mysql;
const mysql = require("mysql2")
const conexao = mysql.createConnection({
    host:"localhost",
    port: 3306,
    user:"root",
    password:"ifsp",
    database:"agenda"
})

// export default conexao;
module.exports = conexao;