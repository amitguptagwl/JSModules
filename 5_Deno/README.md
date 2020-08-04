This repo is exactly same as `3_TypeScript` repo. The only change is, modules need to be loaded with `.ts` extenstion.

So first install [deno](deno.land).

```bash
$ curl -fsSL https://deno.land/x/install/install.sh | sh
```

You can run TypeScript module directly `$ deno run app/src/main.ts`
You can also run ES6 module directly `$ deno run --allow-read  1_es6-module_nodev13/src/main.js`

* No package.json
* No node_modules
* Direct execution of ES6 and TS modules
* Use the module from github, deno land, jspm and other places directly.