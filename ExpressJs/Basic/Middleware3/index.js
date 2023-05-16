const express = require('express');
var app = express();

app.get('/',(req, res, next)=>{
    req.cse = ["SIRISHA"];
    next();
},function(req, res, next){
    req.cse.push("DURGA");
    next();
}, function(req, res){
    req.cse.push("PRASAD");
    res.json(req.cse);
});

app.listen(3000, ()=>{
    console.log("Server is open...");
})