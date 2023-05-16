"use strict";
//boolean data type
let b = false;
console.log(b);
//number dta type
let n = 10.5;
console.log(n);
//string
let fname = "I am Asif shahriar";
fname = "Riya Rahman";
console.log(`Hi ${fname}`);
//array
let items = [1, 3, 5, 6, 7];
console.log(items[3]);
let items2 = [1, 3, 5, 6, '7'];
console.log(items[4]);
//tuple
let t;
t = [
    ["asif", 504],
    ["riya", 506],
    ["ayat", 507]
];
console.log(t[2][0]);
//enum
var color;
(function (color) {
    color[color["red"] = 2] = "red";
    color[color["green"] = 3] = "green";
    color[color["blue"] = 9] = "blue";
    color[color["white"] = 10] = "white";
})(color || (color = {}));
console.log(color.red);
console.log(color[3]);
console.log(color.white);
console.log(color.red);
//unknown type
let notSure = 4;
console.log(notSure);
console.log(typeof (notSure));
let looslyType = 4;
console.log(looslyType);
//union
let uni = 6;
console.log(uni);
