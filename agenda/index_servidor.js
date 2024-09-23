const express = require("express");
const http = require("http")
const cors = require("cors")
const bodyParser = require("body-parser")
const dotenv = require('dotenv')

// caso de erro na importação 

// import express from "express";
// import http from "http";
// import cors from "cors";
// import bodyParser from "body-parser";
// import dotenv from "dotenv";

// import conexao from "./infraestrutura/conexao";



const app = express()
const server = http.createServer(app)



// Carregar as variáveis de ambiente do arquivo .env
dotenv.config();

const port = process.env.PORT || 3000;

app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());


// vou usar no futuro, como não tem database então ...


// conexao.connect(erro=>{
//     if(erro){
//         console.log(erro);
        
//     }else{
        
//     }
// })

server.listen(port,()=>{
    console.log(`Está open na porta : http://localhost:${port}/ `);
    
})
