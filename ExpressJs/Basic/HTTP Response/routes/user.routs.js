const express = require('express');

const router = express.Router();

router.get("/register",(req, res)=>{
    res.statusCode = 200;
    res.sendFile(__dirname + "../views/register.html");
});

router.get("/login",(req, res)=>{
    res.cookie("name","asif");
    res.cookie("age","39");
    res.end();
});

module.exports = router;