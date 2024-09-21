
import express from "express";
import http from "http";
import cors from "cors";
import bodyParser from "body-parser";

const app = express()
const server = http.createServer(app)


app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

import conexao from "./infraestrutura/conexao";

// vou usar no futuro, como não tem database então ...


// conexao.connect(erro=>{
//     if(erro){
//         console.log(erro);
        
//     }else{
        
//     }
// })

server.listen(8080,()=>{
    console.log("Está open na porta : http://localhost:8080/ ");
    
})
