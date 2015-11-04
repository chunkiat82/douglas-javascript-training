export let add = (x,y) => {
    return x+y;
}

export let sub = (x,y) => {
    return add(x,-y);
}

export let mul = (x,y) => {
	var loop = i => {
		if (i === 0) return 0;
		return add(loop(i-1),x);
	}
    return loop(y);
}

////////////////////////////////////////////////////////////////////////////////////////

export var identityf = function identityf(arg){
	return function(){
		return arg;
	}
}

export let identityf6 = arg => () =>{
	return arg	
}

////////////////////////////////////////////////////////////////////////////////////////

export var addf =function addf(arg){
	return function(arg2){
		return arg+arg2;
	}
}

export let addf6 = num1 => num2 =>{
	return num1+num2;
}

////////////////////////////////////////////////////////////////////////////////////////

var mulf =function mulf(arg){
	return function(arg2){
		return arg*arg2;
	}
}


var liftf = function liftf(func){
	return function(x){
		return function (y){
			return func(x)(y);
		}
	}
}
// console.log(liftf(addf)(3)(4)===7);

let liftf6 = func => x => y=> {
	return func(x)(y);
}

// console.log(liftf(mulf)(5)(6)===30);


////////////////////////////////////////////////////////////////////////////////////////

var curry = function curry(func, x){
	return function (y){
		return func(x)(y);
	}
}

// console.log(curry(addf,3)(4)===7);

let curry6 = (func, x) => y=> {
	return func(x)(y);
}

// console.log(curry(addf,3)(4)===7);


////////////////////////////////////////////////////////////////////////////////////////

export var inc1 = curry(addf,1);

export var inc2 = addf(1);

export var inc3 = liftf(addf)(1);

////////////////////////////////////////////////////////////////////////////////////////
export var twice = function twice(func){
	return function(input){
		return func(input,input);
	}
}

export let twice6 = func => input =>{
	return func(input,input);
}

////////////////////////////////////////////////////////////////////////////////////////


export var bus = function bus(func){
	return function(x,y){
		return func(y,x);
	}
}

export let bus6 = func => (x,y) =>{
	return func(y,x);
}


////////////////////////////////////////////////////////////////////////////////////////

export var doubl = function (x){
	return mul(x,2);
}

export var square = function (x){
	return mul(x,x);
}

export var composeu = function(func1,func2){
	return function(x){
		return func2(func1(x));
	}
}

////////////////////////////////////////////////////////////////////////////////////////

export var composeb = function(func1,func2){
	return function(x,y,z){
		return func2(func1(x,y),z);
	}
}

////////////////////////////////////////////////////////////////////////////////////////
export var limit = function(func1,l){
	var state = l;
	return function(x,y){
		if (state > 0){
			state -=1; 
			return func1(x,y);
		}
		return undefined;
	}
}

////////////////////////////////////////////////////////////////////////////////////////

export var from = function(i){	
	return function(){	
		return i++; //booya
	} 
}

////////////////////////////////////////////////////////////////////////////////////////

export var to = function(func1, end){
	return function(){
		var value = func1();

		if ( value === undefined || value<end ){
			return value
		}
		return undefined;
	}
}

////////////////////////////////////////////////////////////////////////////////////////

export var fromTo = function(start,to){
	return function(){
		if (start < to){
			return start++;
		}else{
			return undefined;
		}
	}
}

export var fromTo2 = function(start,end){
	return to(from(start),end);
}

////////////////////////////////////////////////////////////////////////////////////////

