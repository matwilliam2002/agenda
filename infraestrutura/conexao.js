// import mysql from mysql;
const mysql = require("mysql2")
const conexao = mysql.createConnection({
    host:"localhost",
    port: 3306,
    user:"root",
    password:"ifsp",
    database:"agenda"
})

conexao.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});

// export default conexao;
module.exports = conexao;