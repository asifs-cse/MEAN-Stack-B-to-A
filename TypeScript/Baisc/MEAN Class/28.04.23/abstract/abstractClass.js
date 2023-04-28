var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Demo123 = /** @class */ (function () {
    function Demo123() {
    }
    Demo123.prototype.disp123 = function () {
        console.log('welcome to acoe');
    };
    return Demo123;
}());
var cse1 = /** @class */ (function (_super) {
    __extends(cse1, _super);
    function cse1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    cse1.prototype.rocks1 = function () {
        console.log('welcome to abstract class for mcse');
    };
    return cse1;
}(Demo123));
var cse2 = /** @class */ (function (_super) {
    __extends(cse2, _super);
    function cse2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    cse2.prototype.rocks1 = function () {
        console.log('welcome to abstract class from cse');
    };
    return cse2;
}(Demo123));
var c1 = new cse1();
c1.disp123();
c1.rocks1();
var c2 = new cse2();
c2.disp123();
c2.rocks1();
