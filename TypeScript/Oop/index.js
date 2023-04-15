"use strict";
//inheritance
class P {
    constructor(a) {
        this.x = a;
    }
}
class C extends P {
    constructor(a, b) {
        super(a);
        this.y = b;
    }
}
let obj = new P("hello");
let obj2 = new C("HELLO", "world");
console.log(obj2.x, obj2.y);
