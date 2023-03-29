const http = require('http');

const port = 3000;
const hostName = '127.0.0.1';
const server = http.createServer((req, res)=>{
    res.end("Welcome to server!");
})

server.listen(port, hostName,()=>{
    console.log(`Server is running at ${port}: ${hostName}`);
});