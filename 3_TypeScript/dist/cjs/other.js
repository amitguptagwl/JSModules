"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printAge = exports.printName = void 0;
//export default class User {
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
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
