// type assertion

let x: unknown = 40;
let y: number = (x as number);

let x1: unknown = 'Hello World';
let y1: string = <string> x1;

console.log(y);
console.log(y1);