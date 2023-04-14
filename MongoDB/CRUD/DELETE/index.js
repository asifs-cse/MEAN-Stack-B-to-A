const express = require('express');
const mongoose = require('mongoose');
const PORT = 3032;
const app = express();


//create express server
app.listen(PORT, (req, res)=>{
    console.log(`Server is open at http://localhost:${PORT}`);
})