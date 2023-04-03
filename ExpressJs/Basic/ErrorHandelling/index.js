const express = require('express');
const app = express();
const PORT = 4032;
const fs = require('fs');

app.get('/',(req, res, next)=>{
    fs.readFile('./dpsdf.txt',(err, data)=>{
        if(err){
            next(err);
        }else{
            res.send('success');
            console.log(data.toString());
            next();
        }
    })
});


app.use((err, req, res, next)=>{
    res.status(500);
    res.send('404 not found!');
});

app.listen(PORT, (req, res)=>{
    console.log(`Server open at http://localhost:${PORT}`);
});