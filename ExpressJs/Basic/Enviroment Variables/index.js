require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/',(req, res)=>{
    res.send('Hi this is home route');
});

app.listen(PORT, (req, res)=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});