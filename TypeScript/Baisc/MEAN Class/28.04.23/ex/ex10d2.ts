interface calculator{
    (arg:number, arg2:number):number;
}
let cal: calculator = function(num1:number, num2:number){
    return num1+num2;
}

var c1 = cal(10,20);
console.log(c1);