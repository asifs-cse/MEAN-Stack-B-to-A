"use strict";
// class Greeter{
//     greeting!: string;
//     // constructor(msg: string){
//     //     this.greeting = msg;
//     // }
//     //setter
//     set Greetings(gtr: string){
//         this.greeting = gtr;
//     }
;
//implement clock interface
class Clock {
    constructor() {
        this.currentTime = new Date;
    }
    sayTime() {
        return `Current time is not ${this.currentTime}`;
    }
}
;
let obj = new Clock();
console.log(obj.sayTime());
