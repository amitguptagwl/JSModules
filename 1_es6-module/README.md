# Setup

## ES6 modules

Since new browsers who support ES6, understand ES6 modules, you can directly include module in HTML.

For this, open index.html

```html
<script type="module" src="js/main.js"></script>
```

## ES5 script

ES5 doesn't support module but scripts only. To generate ES5 script from the same module structure we created under js folder, you first need to setup this project as node project.

```bash
$ npm install
```

I initially tried babeljs to transpile ES6 modules into ES5 scripts but it doesn't understand import statement and can't load other modules. Hence, I've setup webpack for the same.

Run following command to generate ES5 script;

```bash
$ npm run createEs5Bundle
```

Now, you can include generated ES5 script bundle alon with ES6 module. New browsers who supports ES6 will ignore script tag with `nomodule1` attribute.

```html
<script nomodule src="dist/main.js"></script>
<script type="module" src="js/main.js"></script>
```

This project work fine with any version of node js. Node js is used to create bundle file using webpack for older browsers who supports ES5 syntax only.

If you use node js to run any js file directly, it'll throw error as it doesn't understand import export statements.

Though you can run `index.html` in browser directly but if you face CORS error, you can run `$ npm start` to start the server.

# ES6 module syntax

You can export when it is declared

```js
export const myNumbers = [1, 2, 3, 4];
const animals = ['Panda', 'Bear', 'Eagle']; // Not available directly outside the module
//default: only one per module
export default function myLogger() {
  console.log(myNumbers, animals);
}
//inline
export class Alligator {
   constructor() {
     // ...
   }
}
```

 or in last
 ```js
 //clause
 export { myNumbers, myLogger, Alligator };
 // with Alias
 export { myNumbers, myLogger as Logger, Alligator }
 ```

default export values
```js
export default foo();
export default /^xyz$/;
export default 5 * 7;
export default { no: false, yes: true };
```

*`default` can't be direct property of module but the property of other objects.
## Import

imports are readonoly.

```js
//default
import defaultExport from "module-name";
//namespace
import * as name from "module-name";
//non-default
import { export1 } from "module-name";
//rename with alias
import { export1 as alias1 } from "module-name";
//multiple
import { export1 , export2 } from "module-name";
import { foo , bar } from "module-name/path/to/specific/un-exported/file";
//destructure
import { export1 , export2 as alias2 , [...] } from "module-name";
//default & non-default
import defaultExport, { export1 [ , [...] ] } from "module-name";
import defaultExport, * as name from "module-name";
import "module-name";
var promise = import("module-name");
```

You can even import the module from URL. Check `vue.html` for more detail which is including `fromUrl.js` to import vue module from URL.

## Node js

To run the same code with node js as well, I have added `"type": "module"` in package.json. Use following command to run code in node js.

```bash
$ node -v
v13.14.0
$ node dist/main.js
```