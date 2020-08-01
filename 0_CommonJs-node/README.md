This project is implemented keeping CommonJs loader in mind.

The project can run without package.json `$ node src/main.js`. Or you can rename `package_json` to `package.json`. `"type": "commonjs"` in package.json is default and optional.

* You need not to specify file extension to import a module from a `.js` file.
* CommonJs module loader supports `.js` and `.cjs` file extensions.