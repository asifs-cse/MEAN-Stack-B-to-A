const express = require('express');
const app = express();
const PORT = 3002;

const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
//app.use(bodyParser());

//post value
app.post('/user', (req, res)=>{
    const name = req.body.name;
    res.send(`Welcome ${name}`);
});


app.listen(PORT, ()=>{
    console.log(`Server open at http://localhost:${PORT}`);
});