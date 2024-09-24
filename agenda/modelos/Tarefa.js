// Se quer saber como funciona leia a parte de teste


const conexao = require("../infraestrutura/conexao");

class Tarefa{
    listar(){
        const sql = `SELECT * FROM Tarefa`;

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
        const sql = `SELECT * FROM Tarefa WHERE id=${id}`;

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
        const sql = `INSERT INTO Tarefa set ?`
        return new Promise((resolve, reject )=>{
            conexao.query(sql,dados,(erro,resultado)=>{
                if(erro){
                    reject(erro)
                }else{
                    resolve(resultado);
                }
            })
        })
       
    }
   
}

module.exports = new Tarefa;