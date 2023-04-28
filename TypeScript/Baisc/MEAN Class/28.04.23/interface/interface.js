var xyz = /** @class */ (function () {
    function xyz() {
    }
    xyz.prototype.disp123 = function () {
        console.log('welcome to acoe');
    };
    xyz.prototype.disp4321 = function () {
        console.log('welcom to cse');
    };
    return xyz;
}());
var obj = new xyz();
obj.disp123();
obj.disp4321();
