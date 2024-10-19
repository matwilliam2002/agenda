const express = require("express");
const http = require("http");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require('dotenv');

// caso de erro na importação 

// import express from "express";
// import http from "http";
// import cors from "cors";
// import bodyParser from "body-parser";
// import dotenv from "dotenv";

// import conexao from "./infraestrutura/conexao";



const app = express();
const server = http.createServer(app);



// Carregar as variáveis de ambiente do arquivo .env
dotenv.config();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());



// Tabelas e conexao com mysql
const conexao = require("./infraestrutura/conexao");
const Tabelas = require("./infraestrutura/Tabelas");

// rotas 

const rotaTarefa = require("./rotas/rotaTarefa");




// vou usar no futuro, como não tem database então ...


conexao.connect(erro=>{
    if(erro){
        console.log(erro);
        
    }else{
        Tabelas.init(conexao)
        app.use("/",rotaTarefa)
        server.listen(port,()=>{
            console.log(`Está open na porta : http://localhost:${port}/ `);
            
        })
    }
})


