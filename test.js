var Emittable = require('./index.js');
var fs = require('fs');

var x = function(a, cb){
	console.log(a);
	setTimeout(function(){
		cb(null, 'this is the value of your callback. Returned after 3 seconds.');
	},3000);
	return;
};

fs
	.readFile
	.emit('./package.json')
	.then(msg)
	.catch(function(e){
		console.log('e', arguments);
	});

function msg(msg){
	setTimeout(function(){
		console.log(msg.toString())
	},3000);
	console.log('Package.JSON should be stdout in 3...2...1');
}