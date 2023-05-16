require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const PORT = 4000;
const dbUrl = process.env.MONGO_URL;
const User = require("./models/user.model");


app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());


mongoose.connect(dbUrl)
.then(()=>{
    console.log("mongoDB is connected");
})
.catch((error)=>{
    console.log(error);
    process.exit(1);
})

//home route
app.get("/",(req, res)=>{
    res.sendFile("./index.html"  , {root: __dirname});
});

//register route
app.post("/register",async (req, res)=>{
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(200).json(newUser);
    } catch (error) {
        res.status(500).json(error.message);
    }
});

//register route
app.post("/login",async (req, res)=>{
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email:email});
        if(user && user.password == password){
            res.status(200).json({status: 'Login success'});
        }else{
            res.status(200).json({status: 'Incorrect username or password!'});
        }
    } catch (error) {
        res.status(500).json(error.message);
    }
});

//rout not found
app.use((req, res, next)=>{
    res.status(404).json({
        message: "route not found",
    });
});



app.listen(process.env.PORT || PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})