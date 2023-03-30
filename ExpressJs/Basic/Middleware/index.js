const express = require('express');

const app = express();

const myMiddleWare = (req, res, next)=>{
    console.log('Middle ware function');
    req.currentTime = new Date(Date.now());
    next();
};


app.get("/",myMiddleWare, (req, res)=>{
    console.log("Home route"+req.currentTime);
    res.send("<h1>I am home routes</h1>");
});

app.listen(3000,()=>{
    console.log("Server is open!");
});