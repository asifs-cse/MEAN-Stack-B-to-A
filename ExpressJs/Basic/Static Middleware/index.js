const express = require('express');
const app = express();
const PORT = 4040;

app.use(express.static("public"));

app.get("/",(req, res)=>{
    res.sendFile('index.html', {root: __dirname});
});


app.listen(3000,()=>{
    console.log("Server is open!");
});