const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRouter = require('./routes/user.route');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//access route
app.use(userRouter);

//home route
app.get('/',(req, res)=>{
    res.sendFile('/views/index.html', {root: __dirname});
});

//route not found
app.use((req, res, next)=>{
    res.status(404).json({message:"404 not found!"});
});

//get server error
app.use((err, req, res, next)=>{
    res.status(500).json({message:"something borken"});
});

module.exports = app;

