const express = require('express');
const app = express();
const PORT =4000;

const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res)=>{
    res.sendFile('index.html', {root: __dirname});
});

app.get('/circle', (req, res)=>{
    res.sendFile('circle.html', {root: __dirname});
});

app.get('/triangle', (req, res)=>{
    res.sendFile('triangle.html', {root: __dirname});
});

//calculate circle
app.post('/circle', (req, res)=>{
    const radius = req.body.radius;
    const area = Math.PI *radius *radius;

    res.send(`<h1>Area of Triangle is : ${area}</h1>`);
});

//calculate triangle
app.post('/triangle', (req, res)=>{
    const height = req.body.height;
    const base = req.body.base;
    const area = 0.5*base*height;

    res.send(`<h1>Area of Triangle is : ${area}</h1>`);
});

//open server
app.listen(PORT, (req, res)=>{
    console.log(`Server is open at http://localhost:${PORT}`);
});