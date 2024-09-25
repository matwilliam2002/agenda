const express = require("express")
const rota = express()

const Tarefa = require("../modelos/Tarefas")

rota.get("/listaTarefa",async (req,res)=>{
   
    const dados = await Tarefa.listar()
    res.json(dados)
    // 
})

rota.post("/adicionaTarefa",async (req,res)=>{
    const nome = req.body.nome
    const cor = req.body.cor
    // console.log("teste : ", nome + cor);
    
    Tarefa.adiciona({nome,cor} )
})

module.exports = rota