const express = require('express');
const bodyParser = require('body-parser'); //middle ware
const app = express();
app.use(bodyParser());

const PORT = 3031;

app.get("/",(req, res)=>{
    res.sendFile('/public/registration.html', {root: __dirname });
});

app.post('/login',(req, res)=>{
    let user = req.body.fast_name;
    let pass = req.body.last_name;
    
    console.log(user);
    res.send(`<h1 style="text-align: center;">User name is : ${user}</h1><h1> User password is : ${pass}</h1>`);
});

app.listen(PORT, (req, res)=>{
    console.log(`Server is open at http://localhost:${PORT}`);
});