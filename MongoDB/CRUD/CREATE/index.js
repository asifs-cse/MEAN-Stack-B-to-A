const expresss = require('express');
const app = expresss();
const PORT = 3002;

app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})