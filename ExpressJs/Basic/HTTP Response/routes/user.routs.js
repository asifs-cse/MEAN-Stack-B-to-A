const express = require('express');

const router = express.Router();



router.get("/login",(req, res)=>{
    res.cookie("name","asif");
    res.cookie("age","39");
    res.end();
});

module.exports = router;