const expresss = require('express');
const mongoose = require('mongoose');
const app = expresss();
const PORT = 3002;

//create mongo schema
const studentSchema= new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    roll: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    result: {
        type: String,
        require: true
    },
    phone: {
        type: Number,
        require: true
    }
})

//create mongo model
const studentModel = mongoose.model("student", studentSchema);

//connect mongodb
const dbConnect = async ()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/acoe");
        console.log('db is connected');
    } catch (error) {
        console.log('db is not connected');
        console.log(error.message);
        process.exit(1);
    }
};


app.get('/',(req, res)=>{
    res.send("Welcome to home page!");
});

app.post('/register',async (req, res)=>{
    const newStudent = new studentModel({
        name : 'asif',
        roll: '20mh1a0504',
        address: 'peddapuram',
        result: '3.80',
        phone: 342758
    });
    const studentData = new studentModel.bulkSave();
})


app.listen(PORT, async ()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
    await dbConnect();
});