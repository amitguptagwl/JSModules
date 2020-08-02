define("other", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.printAge = exports.printName = void 0;
    //export default class User {
    var User = /** @class */ (function () {
        function User(name, age) {
            this.name = name;
            this.age = age;
        }
        return User;
    }());
    //export function printName(user){
    function printName(user) {
        console.log(user.name);
    }
    exports.printName = printName;
    //export function printAge(user){
    function printAge(user) {
        console.log(user.age);
    }
    exports.printAge = printAge;
    exports.default = User;
});
define("another", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.anotherModule = void 0;
    exports.anotherModule = "loaded";
});
define("main", ["require", "exports", "other", "another"], function (require, exports, other_js_1, another_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var user = new other_js_1.default("amit", 31);
    other_js_1.printName(user);
    other_js_1.printAge(user);
    console.log(another_js_1.anotherModule);
});
