When you'll open console, you'll find following output in console.
```
result: 299792458
299792458
```
But both funtions `loadConstant` and `loadConstant2` are not accessible as they're inside a module not in global scope.

If you're on node v13, you can also run following command to get the same result;

```bash
$ node src/main.mjs
```