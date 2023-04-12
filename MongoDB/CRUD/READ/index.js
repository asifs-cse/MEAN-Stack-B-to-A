const express = require('express');
const mongoose = require('mongoose');
const PORT = 3030;
const app = express();

//create schema

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },roll:{
        type: String,
        require: true,
    },result:{
        type: String,
        require: true,
    },address:{
        type: String,
        require: true,
    },phone:{
        type: String,
        require: true,
    },
});

const studentModel = mongoose.model("studentInfo", studentSchema);

//create model

const dbConnect = async ()=>{
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/acoe");
        console.log('DB was connected Successfully!');
    } catch (error) {
        console.log(error);
        console.log('DB was not connected');
        process.exit(1);
    }
};

app.get('/show', async (req, res)=>{
    try{
        const sut1 = await studentModel.find();
        res.send(sut1);
        //res.send('kire');
    }catch(err){
        res.send(err);
    }


})

app.listen(PORT,async (req, res)=>{
    console.log(`Server is open at http://localhost:${PORT}`);
    await dbConnect();
});