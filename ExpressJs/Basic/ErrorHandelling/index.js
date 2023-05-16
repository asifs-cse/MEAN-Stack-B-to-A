const express = require('express');
const app = express();
const PORT = 4033;
const fs = require('fs');

// app.get('/',(req, res, next)=>{
//     fs.readFile('./dpsdf.txt',(err, data)=>{
//         if(err){
//             next(err);
//         }else{
//             res.sendFile('success');
//             console.log(data.toString());
//             next();
//         }
//     })
// });

app.get('/',(req, res)=>{
    var err = new Error("Something went wrong!");
    next(err);
    res.send('DURGA PRASAD')
});

app.use((err, req, res, next)=>{
    res.status(200);
    res.send('404 not found!');
});

app.listen(PORT, (req, res)=>{
    console.log(`Server open at http://localhost:${PORT}`);
});