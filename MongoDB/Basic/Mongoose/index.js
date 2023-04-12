const express = require('express');
var app = express();
const mongoose = require('mongoose');
const PORT = 2001;

// let b = mongoose.connect('mongodb://localhost:27017/csedemo');
// b.then((data)=>{console.log('Connection success!')});
// b.catch((err)=>{console.log('connection Failed')});

const dbConnect = async ()=>{
    try{
        mongoose.connect("mongodb://127.0.0.1:27017/csedemon");
        console.log("db is connect");
    }catch(error){
        console.log("db is not connect");
        console.log(error.message);
        process.exit(1);
    }
};

const cse1 = new mongoose.Schema(
    {
        name:{
            type:String,
            required: true
        },
        mob:{
            type: Number,
            required: true
        }
    }
)

const post2 = mongoose.model("csemob",cse1)

console.log(post2.find());

app.listen(PORT, async ()=>{
    console.log(`Server is open at http://localhost:${PORT}`);
    await dbConnect();
});