//import User from "/other" //absolute
import User, { printName, printAge} from "./other.mjs"
import {anotherModule} from "./another.mjs"

const user = new User("amit", 31);
printName(user);
printAge(user);

console.log(anotherModule);