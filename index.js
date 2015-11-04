let add = (x,y) => {
    return x+y;
}

let sub = (x,y) => {
    return add(x,-y);
}

let mul = (x,y) => {
	var loop = i => {
		if (i === 0) return 0;
		return add(loop(i-1),x);
	}
    return loop(y);
}

export default add;
export default sub;

////////////////////////////////////////////////////////////////////////////////////////

var identityf = function identityf(arg){
	return function(){
		return arg;
	}
}

var three = identityf(3);
// console.log(three()===3);

/* ES6 */
let identityf6 = arg => () =>{
	return arg	
}
// console.log(identityf(3)()===3);

////////////////////////////////////////////////////////////////////////////////////////

var addf =function addf(arg){
	return function(arg2){
		return arg+arg2;
	}
}
// console.log(addf(3)(4)===7);

let addf6 = num1 => num2 =>{
	return num1+num2;
}

// console.log(addf(3)(4) === 7);

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

var inc = curry(addf,1);
// console.log(inc(5)===6);
// console.log(inc(inc(5))===7);

var inc = addf(1);
// console.log(inc(5)===6);
// console.log(inc(inc(5))===7);

var inc = liftf(addf)(1);
// console.log(inc(5)===6);
// console.log(inc(inc(5))===7);

////////////////////////////////////////////////////////////////////////////////////////
var twice = function twice(func){
	return function(input){
		return func(input,input);
	}
}

console.log(twice(add)(11)===22);
console.log(twice(mul)(11)===121);

let twice6 = func => input =>{
	return func(input,input);
}

console.log(twice6(add)(11)===22);
console.log(twice6(mul)(11)===121);


////////////////////////////////////////////////////////////////////////////////////////