var Emittable = require('./index.js');

var x = function(a, cb){
	console.log(a);
	setTimeout(function(){
		cb(null, 'this is the value of your callback. Returned after 3 seconds.');
	},3000);
	return;
};

var X = Emittable(x);
// console.log(X);
X('Welcome To Emittable. This is triggered immediately.').then(msg);

function msg(msg){console.log(msg)}