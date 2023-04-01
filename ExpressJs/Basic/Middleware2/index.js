const express = require('express');
const app = express();
const PORT = 4040;

function isMorning(){
    return false;
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
}),
function(req, res, next){
    res.send('Good Afternoon!');
};

app.listen(PORT, ()=>{
    console.log(`Server is open at http://localhost:${PORT}`);
});