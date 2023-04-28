export var x:string = 'welcome to meanstack lab';
export const disp = ()=>{
    console.log('welcome');
}

export class cse{
    a:number;
    b:number;

    constructor(a:number, b:number){
        this.a = a;
        this.b =b;
    }
    add = ()=>{
        console.log('addition: '+(this.a+this.b));
    }
}
