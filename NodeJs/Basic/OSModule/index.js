//os path
// const os = require('os');
// console.log(os.userInfo());
// console.log(os.homedir());
// console.log(os.hostname());
// console.log(os.__dirname());

// console.log(os.totalmem());


//path

const path = require('path');

//console.log(path);

const extensionName = path.extname("index.html");
console.log(extensionName);

const joinName = path.join(__dirname + "/views");
console.log(joinName);