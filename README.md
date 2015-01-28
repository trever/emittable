# Emittable
A Function Wrapper with promise-like syntax for callback chaining, using eventEmitters at its core.

## Usage
```
npm install emittable
```

```javascript

var Emittable = require('emittable');

fs.readFile
	.emit('./README.md')
	.then(msg)
	.catch(function(e){
		throw e;
	});

function msg(msg){console.log(msg.toString())}

```
