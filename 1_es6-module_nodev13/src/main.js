//import User from "/other" //absolute
import User, { printName, printAge} from "./other.js"
import {anotherModule} from "./another.mjs"

const user = new User("amit", 31);
printName(user);
printAge(user);

console.log(anotherModule);

function loadConstant() {
    return import("./my-math.mjs")
    .then(myMath => {
      const result = myMath.LIGHTSPEED;
      console.log("result:" ,result);
      return result;
    });
  }
  
  async function loadConstant2() {
      const myMath = await import("./my-math.mjs");
      const result = myMath.LIGHTSPEED;
      console.log(result);
      return result;
  }
  
  loadConstant()
  loadConstant2();