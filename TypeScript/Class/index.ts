class Greeter{
    greeting!: string;
    // constructor(msg: string){
    //     this.greeting = msg;
    // }
    //setter
    set Greetings(gtr: string){
        this.greeting = gtr;
    }

    get Greetings(): string{
        return this.greeting;
    }
}
let obj = new Greeter();
console.log(obj.Greetings = "Hello typescript");