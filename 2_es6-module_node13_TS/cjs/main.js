"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import User from "/other" //absolute
var other_js_1 = require("./other.js");
var another_js_1 = require("./another.js");
var user = new other_js_1.default("amit", 31);
other_js_1.printName(user);
other_js_1.printAge(user);
console.log(another_js_1.anotherModule);
