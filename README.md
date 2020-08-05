* [0_CommonJs-node](0_CommonJs-node): CommonJs node project setup. package.json is optional.
* [1_es6-module](1_es6-module) : This setup demonstrates how to build node js project with ES6 modules and use them directly on webpage. It also covers how to compile it to ES5 script using webpack so that both ES5 & ES6 can be used on webpage. It also covers how to import ES6 module from URL and dynamic import. ES6 modules can have ".js" & ".mjs" extensions. File extension is must to include a module.
* [2_es6-moduleWithTS](2_es6-moduleWithTS): In this example, previous repo is modifed to generate CommonJs module using TypeScript compiler. I'm still generating ES5 script using webpack. Node js can be used to run both ES6 module and generated CommonJs module. To run ES6 module node js v13 is required. CommonJs modules can be run by any version of node.
* [3_TypeScript](3_TypeScript): In this example, Our source code is written in TypeScript, and we're converting it to the ES6 modules. We've already seen what else we can do with ES6 module in above examples. Typescript provides the option to convert it in CommonJs, AMD, System or other modules.
* [4_TypeScript_WebPack](4_TypeScript_WebPack): In this setup, we're generating single bundle file 
* [5_Deno](5_Deno): Implementation of same TypeScript code with Deno
* [6_Browserify](6_Browserify): Using browserify to generate the browser bundle instead of webpack.


**Note**
* If `"type": "module"` is set in package.json then `require` is not allowed to use.
* [babel-node](https://babeljs.io/docs/en/babel-node) can also be used to run js filw with ES6 syntaxes.
