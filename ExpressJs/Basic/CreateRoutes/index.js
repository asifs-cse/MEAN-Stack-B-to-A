// require express
const express = require('express');
const userRoutes = require('./routes/user.routes');
// 
const app = express();
// create port
const PORT =4444;

//connect routs in app
app.use(userRoutes);

app.use('/',(req, res)=>{
    res.sendFile('/views/home.html', {root: __dirname});
});


app.use((req, res)=>{
    res.send("<h1>404 Not found!</h1>");
})

//create server
app.listen(PORT, (req, res)=>{
    console.log(`Server is open at http://localhost:${PORT}`);
});