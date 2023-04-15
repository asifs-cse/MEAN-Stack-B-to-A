class Greeter{
    greeting!: string;
    constructor(msg: string){
        this.greeting = msg;
    }
}

let obj = new Greeter("Hello");

console.log(obj.greeting);