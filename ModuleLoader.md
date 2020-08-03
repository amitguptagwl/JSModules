* **Scripts** are code fragments that browsers run in global scope. They are precursors of modules.
* **CommonJS** modules are a module format that is mainly used on **servers** (e.g., via Node.js).
* **AMD** modules are a module format that is mainly used in browsers.
* **ECMAScript** modules are JavaScript’s built-in module format. It supersedes all previous formats.

> Before we had modules (ES6), we had scripts (ES5)

|| 	Runs on| 	Loaded 	|Filename ext.|
|--|--|--|--|
| Script 	|browsers 	|async 	| .js|
| CommonJS module 	|servers| 	sync 	|.js .cjs|
| AMD module 	|browsers 	|async 	|.js|
| ECMAScript module 	|browsers and servers 	|async 	|.js .mjs|

## Script
```js
(function () {
    var $ = this.jQuery;

    this.myExample = function () {};
}());
```

* use XMLHttpRequest (XHR) to load the text of modules and do text transforms/parsing in browser
* 

Problems
* difficult to manage on large projects,
* not very scalable, 
* and it leaves out the capability to load scripts on demand.

## CommonJS
```js
var $ = require('jquery');
exports.myExample = function () {};
```

The CJS module format only allowed one module per file, so a "transport format" would be used for bundling more than one module in a file for optimization/bundling purposes.

With this approach, the CommonJS group was able to work out dependency references and how to deal with circular dependencies, and how to get some properties about the current module. However, they did not fully embrace some things in the browser environment that cannot change but still affect module design:

* network loading
* inherent asynchronicity

In addition, it is not optimal to browser as multiple files club into one.

* Designed for servers.
* Modules are meant to be loaded synchronously (the importer waits while the imported module is loaded and executed).
* Compact syntax.

Node js is implemented using the CommonJs loader.

* It automatically adds missing filename extensions.
* It can import a directory foo if there is a *foo/package.json* with a "main" property.
* It can import a directory foo if there is a module *foo/index.js*.
* doesn't support absolute path
* When `"type":"module"` is set in package.json then import with `.js` or without extensions are interpreted as ESM modules. You can also include `.mjs` file. This feature is supported node v13+
* When  `"type":"commonjs"`(default) is set in package.json then import with `.js` or without extensions are interpreted as CommonJS modules. You can also include `.cjs` file.




## AMD (Asynchronous Module Definition )

```js
define(['jquery'] , function ($) {
    return function () {};
});
```
It specifies a mechanism for defining modules such that the module and its dependencies can be asynchronously loaded. This is particularly well suited for the browser environment where synchronous loading of modules incurs performance, usability, debugging, and cross-domain access problems.

Requirejs is the most popular implementation of AMD.


* Designed for browsers.
* Modules are meant to be loaded asynchronously. Code gets notified once the module is available.
* The syntax is slightly more complicated.

## Similarities between CommonJS and AMD module systems

* There is one module per file.
* Such a file is basically a piece of code that is executed:
    * Local scope: The code is executed in a local “module scope”. Therefore, by default, all of the variables, functions, and classes declared in it are internal and not global.
    * Exports: If you want any declared entity to be exported, you must explicitly mark it as an export.
    * Imports: Each module can import exported entities from other modules. Those other modules are identified via module specifiers (usually paths, occasionally full URLs).
* Modules are singletons: Even if a module is imported multiple times, only a single “instance” of it exists.
* No global variables are used. Instead, module specifiers serve as global IDs.

## ECMAScript modules (ES modules or ESM) 

```js
import {importedFunc1} from './other-module1.mjs';
// ..

export function exportedFunc() {
  importedFunc1();
  // ..
}
```

Introduced with ES6. So supported by all the browsers who support ES6.

* Like CommonJS, it supports for cyclic dependencies.
* Like AMD JS, it supports for asynchronous loading.
* The syntax is even more compact than CommonJS’s.
* Modules have static structures (which can’t be changed at runtime). That helps with static checking, optimized access of imports, dead code elimination, and more.
* Support for cyclic imports is completely transparent.
* Supports multiple ways of importing: alias, destructuring, namespace, *, etc.
* unlike CommonJs filename extension is needed wile importing.

## [SystemJS](https://github.com/systemjs/systemjs)

Dynamic ES module loader

Allows to load non-js modules, css mdules, json module, ADM, CommonJS, ES6 modules etc.

----

Node supports module.exports = function () {}, but that is not part of a CommonJS spec.

You can set babeljs or TypeScript transpilers to output in AMD Js or CommonJs or SystemJs.

# Reference

* https://exploringjs.com/impatient-js/ch_modules.html
* https://requirejs.org/docs/whyamd.html