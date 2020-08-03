
> “http://127.0.0.1:8080/dist/another” was blocked because of a disallowed MIME type (“”).

You're including the ES6 module on page directly which is including some module without file extension.

> Uncaught SyntaxError: import declarations may only appear at top level of a module

You're including the ES6 module on page directly without `type="module"`