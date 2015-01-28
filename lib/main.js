var events = require('events');

var Emittable = function(fn){
	return new _emittable(fn);
}

var _emittable = function(fn){
	var _this = this;
	this.eids = [];
	this.token = (Math.random()*100000).toFixed(0);
	var oo = function(/* args */){
		var args = Array.prototype.slice.call(arguments);
		var callback;
		for (var i = args.length - 1; i >= 0; --i) {
			var arg = args[i];
			if (typeof arg !== "undefined"){
				if (typeof arg === "function"){
					callback = arg;
				};
				break;
			}
		};
		if (!callback){
			callback = function(){
				var yargs = Array.prototype.slice.call(arguments);
				var shifted = yargs.shift();
				if (shifted && shifted != undefined && shifted != null){
					return _this.throw(shifted);
				} else {
					return _this.next.apply(_this, yargs);
				};
			};
			++i;
		};
		args[i] = callback;
		var result = fn.apply(_this, args);
		return _this;
	};
	return oo;
};

_emittable.prototype = new events.EventEmitter();

_emittable.prototype.next = function next(){
	var eid = this.eids.shift();
	var args = Array.prototype.slice.call(arguments);
	args.unshift(eid);
	return this.emit.apply(this, args) && this;
};

_emittable.prototype.then = function then(cb){
	var eid = (Math.random()*100000).toFixed(0);
	this.eids.push(eid);
	return this.once.call(this, eid, cb) && this;
};

_emittable.prototype.throw = function alert(){
	var args = Array.prototype.slice.call(arguments);
	// console.log(args);
	args.unshift('error'+this.token);
	return this.emit.apply(this, args) && this;
};

_emittable.prototype.catch = function error(cb){
	return this.on.call(this, 'error'+this.token, cb) && this;
};

Function.prototype.emit = function(){
	var x = Emittable(this);
	var args = Array.prototype.slice.call(arguments);
	return x.apply(x, args);
};


module.exports = Emittable;