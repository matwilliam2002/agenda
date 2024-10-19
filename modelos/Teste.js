// Se você não leu os comentarios em Tabelas.js e melhor voltar e ler X-X



const conexao = require("../infraestrutura/conexao")
// Mesmo esquema da Tabelas,mas esse é mais especifico. Diferentemente da Tabelas que posso criar várias tabelas esse aqui é somentente para Query da tabela Teste
class Teste{
    listar(){
        // Comando do SQL. Minuscula ou Maiuscula não importa, só escrevo desta forma para demarcar
        const sql = `SELECT * FROM Teste`;
       
        // Quando é para retorna algo , gosto de retorna como Promise, pois é mais facil de resolver problemas de escabilidade
        return new Promise ((resolve,reject)=>{
            // Executa o comando SQL
            conexao.query(sql, (erro, resultado)=>{
                if(erro){
                    // se der erro rejeito o erro e menciono possivelmente para front e majoritariamente no back end (essa informação tem que ir para algum lugar)
                    reject(erro)
                }else{
                    resolve(resultado)
                }

            })
        })
        
    }
    // Nesta parte ensinarei como adicionar conteudos de varias formas
    inserindoValores_1(dados){
        const sql = `INSERT INTO Teste Set ?`
        // O parametro dados são os valores que você quer colocar em Teste, sendo que dados vem de forma de JSON
        conexao.query(sql,dados,(erro,resultado)=>{
            if(erro){
                console.log(erro);
                
            }else{
                console.log(resultado);
                
            }
        } )
    }
    inserindoValores_2(dados){
        const sql = `INSERT INTO Teste Set ${dados}`
        
        conexao.query(sql,(erro,resultado)=>{
            if(erro){
                console.log(erro);
                
            }else{
                console.log(resultado);
                
            }
        } )
    }
    inserindoValores_3(dados){
        const sql = `INSERT INTO Teste (nome) values(${dados.nome})`
        
        conexao.query(sql,(erro,resultado)=>{
            if(erro){
                console.log(erro);
                
            }else{
                console.log(resultado);
                
            }
        } )
    }
}