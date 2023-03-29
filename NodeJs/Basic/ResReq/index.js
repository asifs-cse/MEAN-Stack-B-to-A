//server respose request and status code

//creaate srver
const http = require('http');
const port = 3000;

const server = http.createServer((req, res)=>{
    res.writeHead(202, {'Content-Type':'text/html'});
    res.write("<h1>Server created</h1>");
    res.end();
});

server.listen(port,()=>{
    console.log("Server open successflly!");
});