const express = require('express');
const mongoose = require('mongoose');
const PORT = 3030;
const app = express();

app.listen(PORT, (req, res)=>{
    console.log(`Server is open at http://localhost:${PORT}`);
})