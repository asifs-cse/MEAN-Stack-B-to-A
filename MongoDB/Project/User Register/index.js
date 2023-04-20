const express = require('express');
const app = express();
const path = require('path');
const PORT = 4040;
const hbs = require('hbs');
const infoModel = require('./database');

const templatePath = path.join(__dirname,'./templates/');

app.use(express.json());
app.set('view engine', "hbs");
app.set('views', templatePath);
app.use(express.urlencoded({extended:false}));

app.get('/',(req, res)=>{
    res.render('login');
});

app.get('/signup',(req, res)=>{
    res.render('signup');
});

app.post('/signup', async (req,res)=>{
    try {
        const info = {
            email: req.body.email,
            password: req.body.password
        }
        await infoModel.insertMany([info]);
        res.render('home');
        console.log('user registration successfully!');
    } catch (error) {
        console.log('registration failed')
    }
    
});

app.post('/login', async (req,res)=>{
    try {
        
    } catch (error) {
        
    }
})

app.listen(PORT, ()=>{
    console.log(`Server is open at http://localhost:${PORT}`);
});