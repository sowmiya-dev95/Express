
const http = require('http');
const express = require('express');

const app = express();  
// http.createServer((req, res)=>{
//     console.log();
// })

app.use((req,res,next)=>{
    console.log('First Middleware!');
    next();
})

app.use((req,res,next)=>{
    console.log('Second Middleware!');
})

app.use((req,res,next)=>{
    console.log('Third Middleware!');
})

const server = http.createServer(app);
server.listen(3000);