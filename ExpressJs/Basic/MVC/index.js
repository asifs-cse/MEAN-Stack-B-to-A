const express = require('express');
const userRouter = require('./routes/user.routs');
const app = express();

const PORT = 4040;

app.use(express.urlencoded({extended: true}));
app.use(userRouter);

app.get('/',(req, res)=>{
    res.send('This home page');
});

app.use((req, res)=>{
    res.status(404).json({
        message: 'resource not found',
    })
});


app.listen(PORT, ()=>{
    console.log(`Server open at: http://localhost:${PORT}`);
});