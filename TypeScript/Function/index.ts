//function
// return number
function sum(): number{
    return 100;
}
let x: number = sum();
console.log(x);

//void type
function msg():void{
    console.log('Hello world');
};

msg();

//get value and return
function mul(x:number, y:number):number{
    return x*y;
}

console.log(mul(5,6));

//pass object
function obj(labObj:{size: number, label: string}){
    console.log(labObj.label);
    console.log(labObj.size);
}
let myObjt = {
    size:10,
    label: 'Size of object'
}

obj(myObjt);