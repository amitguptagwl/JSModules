# Setup

First switch to the node v13 or latest. Install Type Script compiler >v2
```bash
$ npm install -g tsc
$ tsc -v
Version 3.9.7
```

```bash
$ node -v
v13.14.0
$ cd app
$ npm run es6 cjs
$ node dist/es6/main.js 
amit
31
loaded
$ 
$ node ../dist/cjs/main.js 
amit
31
loaded
```

We're generating es6 module inside app folder and commonjs folder outside app folder. Because of `type: module` in package.json.

Include ES6 module in index.html with `type="module"`.


## Commands

```json
  "es6": "tsc --target es6 --module es6 --rootDir src --outDir dist/es6 src/main.ts",
  "cjs": "tsc --target es6 --module commonjs --rootDir src --outDir ../dist/cjs src/main.ts",
  "amd": "tsc --target es5 --module amd --rootDir src --outFile ../dist/amd/main.js src/main.ts"
```

Don't set `outFile` in tsc command or tsconfig.json, as we don't have to create the single bundle script file but we need to maintain the module structure same like source folder.

`$ npm run amd`

AMD module needs require.js. We have downloaded it in vendor folder and included it in amd.html. Similarly, we can generate module as per System.js.

