const express = require('express');
const mongooe = require('mongoose');
const app = express();
const PORT = 3031;

//create db Schema
const studentSchema = new mongooe.Schema({
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
const studentModel = new mongooe.model("studentInfo", studentSchema);

//inser daata in db
app.get('/register',async (req, res)=>{
    try {
        const info = new studentModel(
            {
             id: 123,
             name: "asif",
             roll: "20mh1a0504",
             phone: 01234
            }
         );
         const updateData = await info.save();
         console.log("Data update successfully");
         res.send(updateData);
    } catch (error) {
        console.log('data update fail');
        console.log(error);
        res.send('404 not found')
        process.exit(1);
    }
    
});

//show data
app.get('/show',async(req, res)=>{
    try {
        const stuInfo = await studentModel.find();
        res.send(stuInfo);
    } catch (error) {
        res.send('404 not found!');
    }
})

//create home route
app.get('/',(req, res)=>{
    res.send('Welcome to home route');
})

//connect mongodb in express server
const dbConnect = async ()=>{
    try {
        await mongooe.connect("mongodb://127.0.0.1:27017/acoe");
        console.log('Database onnection successfully!');
    } catch (error) {
        console.log('Database conection failed');
        console.log(error);
        process.exit(1);
    }
    
};

//create express server
app.listen(PORT, ()=>{
    console.log(`Server is open at http://localhost${PORT}`);
    //call db function
    dbConnect();
})