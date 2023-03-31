//require module
const express = require('express');
const app = express();

//const userRouts = require('./routes/user.routs');

// transfer routs in app
//app.use(userRouts);

app.use((req, res)=>{
    res.send("404 not found!");
});

app.get("/",(req, res)=>{
    res.sendFile('/views/idex.html', {root: __dirname });
});

app.get("/reg",(req, res)=>{
    res.statusCode = 200;
    res.sendFile('/views/index.html', {root: __dirname});
});

module.exports = app;