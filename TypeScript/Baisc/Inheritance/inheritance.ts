class mst{
    disp():void{
        console.log('welcome to meanstack class!');
    }
}
class mtlab extends mst{
    rocks():void{
        console.log('welcome to meanstack lab!');
    }
}

const b = new mtlab();
b.disp();
b.rocks();