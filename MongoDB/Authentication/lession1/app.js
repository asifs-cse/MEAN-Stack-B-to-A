require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const PORT = 4000;
const dbUrl = process.env.MONGO_URL;

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());


mongoose.connect(dbUrl)
.then(()=>{
    console.log("mongo db is connected");
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
app.get("/register",(req, res)=>{
    const {email, password} = req.body;
    res.status(201).json({email, password});
});

//register route
app.get("/login",(req, res)=>{
    res.status(201).json({message: "user is login"});
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