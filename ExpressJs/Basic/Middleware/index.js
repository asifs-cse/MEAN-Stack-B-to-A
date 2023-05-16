const express = require('express');

//access different port
const cors = require('cors');

const app = express();

const myMiddleWare = (req, res, next)=>{
    console.log('Middle ware function');
    req.currentTime = new Date(Date.now());
    next();
};

app.use(cors);

app.get("/",myMiddleWare, (req, res)=>{
    console.log("Home route"+req.currentTime);
    res.send("<h1>I am home routes</h1>");
});

app.get("/kire", (req, res)=>{
    res.send("<h1>kire</h1>");
});

app.use((err, req, res, next)=>{
    res.status(500).send('Something broke!');
});

app.listen(3000,()=>{
    console.log("Server is open!");
});