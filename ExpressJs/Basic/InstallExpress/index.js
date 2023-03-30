const app = require('./app');
//define port
const PORT = 3000;

//open server
app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});

