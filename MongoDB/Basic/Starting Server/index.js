const express = require('express');
const app = express();

const PORT = 4000;

app.listen(PORT, (req, res)=>{
    console.log(`Server is open at http://localhost${PORT}`);
});