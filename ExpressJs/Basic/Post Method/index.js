const express = require('express');
bodyParser = require('body-parser'); //middle ware
const app = express();

const PORT = 3031;

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",(req, res)=>{
    //res.sendFile(path.join(__dirname, '../public', 'index.html'));
    //res.sendFile('index.html', { root: path.join(__dirname, '../public') });
    res.sendFile(__dirname + '/public/index.html');
});

app.post("/login",(req, res)=>{
    let user = req.body.user_name;
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(PORT, (req, res)=>{
    console.log(`Server is open at http://localhost:${PORT}`);
});