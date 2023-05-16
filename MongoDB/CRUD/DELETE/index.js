const express = require('express');
const mongoose = require('mongoose');
const PORT = 3032;
const app = express();

//create db Schema
const studentSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },name: {
        type: String,
        required: true
    },roll: {
        type: String,
        required: true
    },phone: {
        type: Number,
        required: true
    }
});

//create student db model
const studentModel = new mongoose.model("studentInfo", studentSchema);

//connect database
const dbConnect = async ()=>{
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/acoe");
        console.log('database was connected successfully');
    } catch (error) {
        console.log(error);
        console.log('database not connected');
        process.exit(1);
    }
};


//create route
app.get('/remove', async (req, res)=>{
    try {
        await studentModel.deleteOne({_id: "643792f1b1a31cc26dc51444"});
        console.log('remove successfully');
        res.send('remove success');
    } catch (error) {
        console.log('remove not succesully');
        res.send('not success');
    }
    
});

//create express server
app.listen(PORT, async (req, res)=>{
    console.log(`Server is open at http://localhost:${PORT}`);
    await dbConnect();
});