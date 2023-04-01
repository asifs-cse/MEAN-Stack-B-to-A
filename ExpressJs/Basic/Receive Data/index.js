const express = require('express');
const app = express();
const PORT = 3003;

const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
//app.use(bodyParser());

app.get('/register',(req, res)=>{
    res.sendFile('register.html', {root: __dirname});
});

//post value
app.post('/register', (req, res)=>{
    const userName = req.body.user_name;
    const userPasswrod = req.body.user_pass;
    
    res.send(`User name is: ${userName} and User password is: ${userPasswrod}`);
});


app.listen(PORT, ()=>{
    console.log(`Server open at http://localhost:${PORT}`);
});