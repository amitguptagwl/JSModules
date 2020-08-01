Refer [1_es6-module](1_es6-module) for setup and to understand concepts

In this setup we're trying to generate ES5 script and CommonJs modules from ES6 modules.

1. You can include ES6 modules in the HTML page directly. Path `app/src/main.js`
2. You can run ES6 modules from node js directly. `$ cd app && node src/main.js`
3. You can generate ES5 script to include on HTML page or to run with node.

```bash
$ cd app
$ npm run createEs5Bundle
$ cd ..
$ node es5/main.js
amit
31
loaded
```
Include `es5/main.js` on webpage without `type="module"`

4. You can generate CommonJs module using typescript

```bash
$ cd app
$ npm run cjs
$ cd ..
$ node cjs/main.js
amit
31
loaded
```

# Configuration

ES6 module doesn't support `require` but `import`. Similarly, CommonJs doesn't support `import` but `require`.

To run `app/src/main.js` directly from node js, we need to set `"type": "module"` in package.json. But then we can't run CommonJs module. So I have shifted the node js repo to `app` folder. And keeping the generated code out side node js project.

In addition, since we're using TypeScript compiler to transpile ES6 modules to CommonJS modules, we had to rename `.mjs` files to `.js`. Because tsc doesn't understand them.