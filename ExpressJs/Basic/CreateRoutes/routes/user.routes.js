const express = require('express');
const routes = express.Router();

routes.get('/about',(req, res)=>{
    res.send('This about page!')
    //res.sendFile('/views/about.html', {root: __dirname});
});

routes.get('/notice', (req, res)=>{
    res.sendFile('/views/notice.html', {root: __dirname});
});

routes.get('/result',(req, res)=>{
    res.sendFile('/views/result.html', {root: __dirname});
});

module.exports = routes;