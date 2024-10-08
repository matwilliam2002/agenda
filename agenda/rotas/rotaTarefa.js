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

rota.delete("/deletarTarefa", async (req,res)=>{
    const id = req.body.id;
    try {
        // Lógica para deletar a tarefa do banco de dados
        await Tarefa.deletar(Id); // Supondo que esta função deleta a tarefa
    
        res.status(200).json({ message: 'Tarefa deletada com sucesso' });
    } 
    catch (error) {
        res.status(500).json({ message: 'Erro ao deletar tarefa', error: error.message });
    }
    
  
 
})
module.exports = rota