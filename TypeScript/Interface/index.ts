//interface

interface labelValue{
    label: string,
    size: number
}

function printLabel(lableObj: labelValue){
    console.log(lableObj.label, lableObj.size);
}

const myObj = {
    label: "this is label size",
    size: 2345,
}

printLabel(myObj);

//read only value
// readonly value not change able
interface point{
    readonly x: number,
    readonly y: number
}
let p1:point = {x:10, y:20}
console.log(p1.x, p1.y);

//function interface

interface calculate{
    (x:number, y:number): number;
}

let obj: calculate = (i:number, j:number):number =>{
    return i+j;
}

console.log(obj(10,34));