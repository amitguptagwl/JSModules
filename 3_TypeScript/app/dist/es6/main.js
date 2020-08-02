//import User from "/other" //absolute
import User, { printName, printAge } from "./other.js";
import { anotherModule } from "./another.js";
const user = new User("amit", 31);
printName(user);
printAge(user);
console.log(anotherModule);
