const express = require("express")
const rota = express()

// const Tarefa = require("../modelos/Tarefa")

rota.get("/listaTarefa",async (req,res)=>{
    res.json(Tarefa.listar())
    // 
})

rota.post("/adicionaTarefa",async (req,res)=>{
    const nome = req.body.nome
    const cor = req.body.cor
    console.log("teste : ", nome + cor);
    
    // Tarefa.adiciona({nome} )
})

module.exports = rota