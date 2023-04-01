const express = require('express');

const app = express();

const PORT = 4040;

function isMorning(){
    return true;
};

app.get('/', (req, res)=>{
    res.send("This home page!");
});

app.get('/hello', (req, res, next) =>{
    if(isMorning){
        res.send("Good Morning!");
    }else{
        next();
    }
}),(req, res, next)=>{
    res.send('Good Afternoon!');
};

app.get('/morning', (req, res)=>{
    res.sendFile('/views/morning.html', {root: __dirname});
});

app.use((req, res)=>{
    res.send("404 Nof found!");
});

app.listen(PORT, ()=>{
    console.log(`Server is open at http://localhost:${PORT}`);
});