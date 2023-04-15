//inheritance
class P{
    x: string;
    constructor(a: string){
        this.x = a;
    }
    say(){
        console.log('say parents');
    }
}

//inherite
class C extends P{
    y:string;
    constructor(a:string, b:string){
        super(a);
        this.y = b;
    }
    //overright
    say(){
        console.log('say chid');
    }
}


let obj = new P("hello");
let obj2 = new C("HELLO","world");
console.log(obj2.say());


//non generics

// function identity(arg: any):any{
//     return arg;
// }
//generic
function identity<Type>(arg: Type):Type{
    return arg;
}

console.log(identity(25));
console.log(identity('Hello'))