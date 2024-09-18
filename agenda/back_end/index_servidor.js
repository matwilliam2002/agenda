// const express = require("express");

// const http = require("http");
// const cors = require("cors");


// const bodyParser = require("body-parser")
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

server.listen(8080,()=>{
    console.log("Está open na porta : http://localhost:8080/ ");
    
})