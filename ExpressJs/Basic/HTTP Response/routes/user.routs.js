const express = require('express');

const router = express.Router();

router.get("/register",(req, res)=>{
    // res.status(200).json({
    //     "message": "I am register page!",
    //     statusCode: 200,
    // });
    res.redirect("/login");
});

router.get("/login",(req, res)=>{
    res.send("I am login route!");
});

module.exports = router;