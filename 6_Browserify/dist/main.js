(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports.anotherModule = "loaded";
},{}],2:[function(require,module,exports){
//import User from "/other" //absolute
const User = require("./other")
const {anotherModule} = require("./another.cjs")

const user = new User("amit", 31);
console.log(user.name);
console.log(user.age);

console.log(anotherModule);
},{"./another.cjs":1,"./other":3}],3:[function(require,module,exports){
//export default class User {
class User {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
    
module.exports = User;
},{}]},{},[2]);
