# TypeScript-SDK-Template
使用TypeScript开发SDK模板

``` bash
npm i @sogrey/typescript-sdk-template
```

``` html
<!-- <script src="./bundles/tsdk.umd.js"></script> -->
<script src="./node_modules/@sogrey/typescript-sdk-template/bundles/tsdk.umd.js"></script>
<script>
    let greeter = new TSDK.Greeter("world");
    console.log(greeter.greet());
</script>
```

``` js
let TSDK = require('@sogrey/typescript-sdk-template')

let greeter = new TSDK.Greeter("world");
console.log(greeter.greet());
```
