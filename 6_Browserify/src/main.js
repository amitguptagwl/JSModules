//import User from "/other" //absolute
const User = require("./other")
const {anotherModule} = require("./another.cjs")

const user = new User("amit", 31);
console.log(user.name);
console.log(user.age);

console.log(anotherModule);