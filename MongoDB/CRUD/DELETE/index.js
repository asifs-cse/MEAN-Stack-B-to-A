const express = require('express');
const mongoose = require('mongoose');
const PORT = 3032;
const app = express();


//connect database
const dbConnect = ()=>{
    try {
        mongoose.connect("mongodb://127.0.0.1:27017/acoe");
        console.log('database was connected successfully');
    } catch (error) {
        console.log(error);
        console.log('database not connected');
        process.exit(1);
    }
};



//create express server
app.listen(PORT, (req, res)=>{
    console.log(`Server is open at http://localhost:${PORT}`);
    dbConnect();
})