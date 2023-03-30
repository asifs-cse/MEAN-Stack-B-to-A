//require module
const express = require('express');
const userRouts = require('./routes/user.routs');

const app = express();
app.use(userRouts);

// transfer routs in app
app.use("/api/user/",userRouts);

app.use("/",(req, res)=>{
    res.send("I am home route!");
});

app.use((req, res)=>{
    res.send("404 not found!");
})

module.exports = app;