//require express module
const express = require('express');

const app = express();

//get url;
app.get("/",(req, res)=>{
    res.send("I how are you?");
});
// put data
app.post("/",(req, res)=>{
    res.send("Yes I am fine");
});
//update data
app.put("/",(req, res)=>{
    res.send("I am not fine! at this moment");
});
//delete data
app.delete("/",(req, res)=>{
    res.send("I how are you?");
});


module.exports = app;