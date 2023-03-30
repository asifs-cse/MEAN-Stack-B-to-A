//require express module
const express = require('express');
//require router
const userRouter = require('./routes/user.routs');

const app = express();
// transfer routs in app
app.use("/api/user/",userRouter);

app.use("/",(req, res)=>{
    res.send("I am home route!");
});

app.use((req, res)=>{
    res.send("404 not found!")
})

module.exports = app;