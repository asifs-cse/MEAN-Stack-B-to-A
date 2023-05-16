const express = require('express');
const bodyParser = require('body-parser'); //middle ware
const app = express();
app.use(bodyParser());

const PORT = 3031;

app.get("/",(req, res)=>{
    res.sendFile('/public/registration.html', {root: __dirname });
});

app.post('/login',(req, res)=>{
    //get value
    let user = req.body.fast_name;
    let pass = req.body.last_name;
    let gmail = req.body.user_gmail;
    //pass value
    res.send(`<body style="background-color: rgb(94, 233, 191); text-align: center">
    <h1>User name is : ${user}</h1><h1> User password is : ${pass}</h1>
    <h1> User email is : ${gmail}</h1></body>`);
});

app.listen(PORT, (req, res)=>{
    console.log(`Server is open at http://localhost:${PORT}`);
});