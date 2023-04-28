abstract class Demo123{
    disp123():void{
        console.log('welcome to acoe');
    }
    abstract rocks1():void;
}

class cse1 extends Demo123{
    rocks1(): void {
        console.log('welcome to abstract class for mcse');
    }
}

class cse2 extends Demo123{
    rocks1(): void {
        console.log('welcome to abstract class from cse')
    }
}

const c1 = new cse1();
c1.disp123();
c1.rocks1();
const c2 = new cse2();
c2.disp123();
c2.rocks1();