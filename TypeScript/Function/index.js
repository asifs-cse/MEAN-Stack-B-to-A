"use strict";
//function
// return number
function sum() {
    return 100;
}
let x = sum();
console.log(x);
//void type
function msg() {
    console.log('Hello world');
};

//call method
msg();
//get value and return
function mul(x, y) {
    return x * y;
}
console.log(mul(5, 6));
//pass object
function obj(labObj) {
    console.log(labObj.label);
    console.log(labObj.size);
}
let myObjt = {
    size: 10,
    label: 'Size of object'
};
obj(myObjt);
