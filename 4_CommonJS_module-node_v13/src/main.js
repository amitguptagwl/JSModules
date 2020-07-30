//import User from "/other" //absolute
const User = require("./other.cjs")
const {anotherModule} = require("./another")

const user = new User("amit", 31);
console.log(user.name);
console.log(user.age);
console.log(anotherModule);