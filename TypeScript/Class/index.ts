// class Greeter{
//     greeting!: string;
//     // constructor(msg: string){
//     //     this.greeting = msg;
//     // }
//     //setter
//     set Greetings(gtr: string){
//         this.greeting = gtr;
//     }

//     get Greetings(): string{
//         return this.greeting;
//     }
// }
// let obj = new Greeter();
// console.log(obj.Greetings = "Hello typescript");

// class Greeter{
//     private greeting!: string;
//     set Greetings(gtr: string){
//         this.greeting = gtr;
//     }

//     get Greetings(): string{
//         return this.greeting;
//     }
// }
// let obj = new Greeter();
// console.log(obj.Greetings = "Hello typescript");

//interface

interface ClockInterface{
    currentTime: Date;
    sayTime(): string;
};

//implement clock interface
class Clock implements ClockInterface{
    constructor(){}
    currentTime: Date = new Date;
    sayTime(): string {
        return `Current time is not ${this.currentTime}`;
    }
};

let obj = new Clock();
console.log(obj.sayTime());
