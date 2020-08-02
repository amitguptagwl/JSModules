//import User from "/other" //absolute
import User, { printName, printAge} from "./other"
import {anotherModule} from "./another"

const user = new User("amit", 31);
printName(user);
printAge(user);

console.log(anotherModule);