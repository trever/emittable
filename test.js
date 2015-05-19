var Emittable = require('./index.js');
var fs = require('fs');

var xy = function(name, cb){
	// console.log(a);
	cb(null, './package.js');
	return;
};

function msg(msgd, cb){
	// console.log(arguments);
	cb(null, msgd.name);
	// cb(null, JSON.parse(msg).name)
};


xy.emit('magic')
	.then(fs.readFile)
	.then(function(file){
		console.log(file);
	})
	.catch(function(e){
		throw(e);
		console.log('e', e);
	});

// xy('magic', function(e,r){
// 	console.log(r);
// });

// fs.readFile.emit('./package.json', 'utf8')
// 	.then(function(name){
// 		console.log(name);
// 	});





