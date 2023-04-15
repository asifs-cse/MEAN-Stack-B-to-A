"use strict";
class Greeter {
    // constructor(msg: string){
    //     this.greeting = msg;
    // }
    //setter
    set Greetings(gtr) {
        this.greeting = gtr;
    }
    get Greetings() {
        return this.greeting;
    }
}
let obj = new Greeter();
console.log(obj.Greetings = "Hello typescript");
