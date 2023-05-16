const express = require('express')
const bodyparser = require('body-parser')
const mongoDB = require('mongoose')
const app = express();
const PORT = 5000;
app.use(bodyparser.json());
app.use(express.static('public'));
app.use(bodyparser.urlencoded({extended:true}));

//connect mongodb

const dbConnect = ()=>{
    try {
        mongoDB.connect('mongodb://localhost:27017/loginuser');
        console.log('connection success');
    } catch (error) {
        console.log('connection not success');
        process.exit();
    }
};

app.get('/',(req, res)=>{
    res.sendFile('./index.html', {root: __dirname});
});

app.get('/register',(req, res)=>{
    res.sendFile('./public/register.html', {root: __dirname});
});

app.get('/login',(req, res)=>{
    res.sendFile('./public/login.html', {root: __dirname});
});

app.use((req, res)=>{
    res.status(200).json({message: 'url not found'});
});

app.listen(PORT,async ()=>{
    console.log(`Server is open at http://localhost:${PORT}`);
    await dbConnect();
});