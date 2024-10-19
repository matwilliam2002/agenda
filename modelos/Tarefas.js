// Se quer saber como funciona leia a parte de teste


const conexao = require("../infraestrutura/conexao");

class Tarefas{
    listar(){
        const sql = `SELECT * FROM Tarefas`;

        return new Promise((resolve,reject)=>{
            conexao.query(sql,(erro,resultado)=>{
                if(erro){
                    reject(erro)
                }else{
                    resolve(resultado)
                }
            })
        })
    }
    tarefaUnica(id){
        const sql = `SELECT * FROM Tarefas WHERE id=${id}`;

        return new Promise((resolve,reject)=>{
            conexao.query(sql,(erro,resultado)=>{
                if(erro){
                    reject(erro)
                }else{
                    resolve(resultado)
                }
            })
        })
    }
    adiciona(dados){
        const sql = `INSERT INTO Tarefas set ?`
        return new Promise((resolve, reject )=>{
            conexao.query(sql,dados,(erro,resultado)=>{
                if(erro){
                    console.log(erro);
                    
                    reject(erro)
                }else{
                    console.log(resultado);
                    
                    resolve(resultado);
                }
            })
        })
       
    }
    deletar(id) {
        const sql = `DELETE FROM Tarefas WHERE id = ?;`;
        return new Promise((resolve, reject) => {
            conexao.query(sql, [id], (erro, resultado) => {
                if (erro) {
                    reject(erro);
                } else {
                    resolve(resultado);
                }
            });
        });
    }
    
   
}

module.exports = new Tarefas;