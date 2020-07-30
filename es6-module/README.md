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

export default function myLogger() {
  console.log(myNumbers, animals);
}

export class Alligator {
   constructor() {
     // ...
   }
}
```

 or in last
 ```js
 export { myNumbers, myLogger, Alligator };
 ```
 Alias
 ```js
 export { myNumbers, myLogger as Logger, Alligator }
 ```

## Import

```js
//default
import defaultExport from "module-name";
//all
import * as name from "module-name";
//non-default
import { export1 } from "module-name";
//rename with alias
import { export1 as alias1 } from "module-name";
//multiple
import { export1 , export2 } from "module-name";
import { foo , bar } from "module-name/path/to/specific/un-exported/file";

import { export1 , export2 as alias2 , [...] } from "module-name";
//default & non-default
import defaultExport, { export1 [ , [...] ] } from "module-name";
import defaultExport, * as name from "module-name";
import "module-name";
var promise = import("module-name");
```
