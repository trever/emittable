# Emittable
A Function Wrapper with promise-like syntax for callback chaining, using eventEmitters at its core.

## Usage
```javascript

var Emittable = require('emittable');

var x = function(a, cb){
	console.log(a);
	setTimeout(function(){
		cb(null, 'this is the value of your callback. Returned after 3 seconds.');
	},3000);
	return;
};

var X = Emittable(x);

X('Welcome To Emittable. This is triggered immediately.').then(msg);

function msg(msg){console.log(msg)}

```
