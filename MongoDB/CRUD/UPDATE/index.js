const express = require('express');
const mongooe = require('mongoose');
const app = express();
const PORT = 3031;

//connect mongodb in express server
const dbConnect = async ()=>{
    try {
        await mongooe.connect("mongodb://127.0.0.1:27017/acoe");
        console.log('Database onnection successfully!');
    } catch (error) {
        console.log('Database conection failed');
        console.log(error.message());
        process.exit(1);
    }
    
}

//create express server
app.listen(PORT, ()=>{
    console.log(`Server is open at http://localhost${PORT}`);
    //call db function
    dbConnect();
})