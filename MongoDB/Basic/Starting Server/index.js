const express = require('express');
const mongoose = require('mongoose');
const app = express();

const PORT = 4000;

const mongoDB = async ()=>{
    try {
        mongoose.connect("mongodb://127.0.0.1:27017/MEANTestDB");
        console.log('db is connecte...');
    } catch (error) {
        console.log('db is not connect...');
        console.log(error.message());
        process.exit(1);
    }
}

app.listen(PORT,async (req, res)=>{
    console.log(`Server is open at http://localhost${PORT}`);
    await mongoDB();
});