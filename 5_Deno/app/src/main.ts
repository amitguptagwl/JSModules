//import User from "/other" //absolute
import User, { printName, printAge} from "./other.ts"
import {anotherModule} from "./another.ts"

const user = new User("amit", 31);
printName(user);
printAge(user);

console.log(anotherModule);