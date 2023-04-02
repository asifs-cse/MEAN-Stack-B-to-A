const express = require('express');
const app = express();
const PORT = 4040;

app.get('/products/:id([0-9]+)', (req, res)=>{ //get o to 9any intiger number
    res.send(`<h1>ID = ${req.params.id}</h1>`);
});

app.get('/products2/:id([0-9]{3})', (req, res)=>{ //get o to 9 only three intiger number
    res.send(`<h1>ID = ${req.params.id}</h1>`);
});

app.get('/products3/:id([a-zA-Z]{3})', (req, res)=>{ //get a to z  only three intiger number
    res.send(`<h1>ID = ${req.params.id}</h1>`);
});

app.get('*', (req, res)=>{
    res.status(404).send({
        message: "not a valid route",
    });
});

app.listen(PORT, (req, res)=>{
    console.log(`Server is open at http://localhost:${PORT}`);
});