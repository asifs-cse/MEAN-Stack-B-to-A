"use strict";
//interface
function printLabel(lableObj) {
    console.log(lableObj.label, lableObj.size);
}
const myObj = {
    label: "this is label size",
    size: 2345,
};
printLabel(myObj);
let p1 = { x: 10, y: 20 };
console.log(p1.x, p1.y);
let obj = (i, j) => {
    return i + j;
};
console.log(obj(10, 34));
