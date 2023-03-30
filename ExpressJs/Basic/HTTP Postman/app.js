//require express module
const express = require('express');

const app = express();

//get url;
app.get("/",(req, res)=>{
    res.send("I how are you?");
    res.end();
});
// put data
app.post("/post",(req, res)=>{
    res.send("Yes I am fine");
    res.end();
});
//update data
app.put("/update",(req, res)=>{
    res.send("I am not fine! at this moment");
    res.end();
});
//delete data
app.delete("/delete",(req, res)=>{
    res.send("I how are you?");
    res.end();
});


module.exports = app;