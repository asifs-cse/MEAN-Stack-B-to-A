interface abc{
    disp123():void;
}
//interface

interface klm extends abc{
    disp4321():void;
}

class xyz implements abc{
    disp123(): void {
        console.log('welcome to acoe');
    }
    disp4321():void{
        console.log('welcom to cse');
    }
}

const obj = new xyz();
obj.disp123();
obj.disp4321();