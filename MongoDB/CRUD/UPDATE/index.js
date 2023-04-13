const express = require('express');
const mongooe = require('mongoose');
const app = express();
const PORT = 3031;

app.listen(PORT, ()=>{
    console.log(`Server is open at http://localhost${PORT}`);
})