const express = require('express');
const app = express();
const PORT = 3001;

app.get('/', (req, res)=>{
    const id= req.query.id; //get value using quresy
    res.send(`<h1>Student id is :${id}</h1>`);
});

app.get('/userId/:id/userAge/:age', (req, res)=>{
    const id = req.params.id; //get value in route params
    const age = req.params.age;

    res.send(`<h1>User id is: ${id}, user age is: ${age}</h1>`);
});

app.listen(PORT, ()=>{
    console.log(`Server open at http://localhost:${PORT}`);
});