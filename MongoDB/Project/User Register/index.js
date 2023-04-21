const express = require('express');
const app = express();
const session = require('express-session')
const path = require('path');
const PORT = 4040;
const hbs = require('hbs');
const infoModel = require('./database');

const templatePath = path.join(__dirname,'./templates/');

app.use(session({secret:'measnstack'}));

app.use(express.json());
app.set('view engine', "hbs");
app.set('views', templatePath);
app.use(express.urlencoded({extended:false}));

app.use(
    session({
        secret:'cse meanstack session example'
    })
)

app.get('/count',(req, res)=>{
    if(req.session.count){
        req.session.count++;
        res.send("You visited this page: "+req.session.count);
    }else{
        req.session.count =1;
        res.send('first time');
    }
});

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
        const check = await infoModel.findOne({email:req.body.user_email});
        if(check){
            if(check.password == req.body.user_password){
                res.render("home");
                req.session.loggedin = true;
            }else{
                res.send('wrong password');
            }
        }else{
            res.send('User not registered')
        }
        
    } catch (error) {
        res.send(error);
    }
});

app.get('/next',(req, res)=>{
    if(req.session.loggedin){
        res.send('Secreat content only for logged user');
    }else{
        res.send('Please login to view this page')
    }
    res.end();
})

app.listen(PORT, ()=>{
    console.log(`Server is open at http://localhost:${PORT}`);
});