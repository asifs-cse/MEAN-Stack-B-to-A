const express = require('express');
const userRouters = require('./routers/user.route');
const PORT = 4044;

const app = express();
app.use(express.static('public'));
app.use(userRouters);

app.get('/',(req, res)=>{
    res.sendFile('/views/index.html', {root: __dirname});
});

app.use((req, res)=>{
    res.send('<h1>404 not found!</h1>');
});

app.listen(PORT, (req, res)=>{
    console.log(`Server is open at http://localhost:${PORT}`);
});