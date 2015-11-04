var add = (x,y) => {
    return x+y;
}

var sub = (x,y) => {
    return add(x,-y);
}

var mul = (x,y) => {
    return x*y;
}

console.log(add(3,4)===7);
console.log(sub(3,4)===-1);
console.log(mul(3,4)===12);

////////////////////////////////////////////////////////////////////////////////////////

/* ES5 */
var identityf = function identityf(arg){
	return function(){
		return arg;
	}
}

var three = identityf(3);
console.log(three()===3);

/* ES6 */
var identityf = arg => () =>{
	return arg	
}
console.log(identityf(3)()===3);

////////////////////////////////////////////////////////////////////////////////////////

var addf =function addf(arg){
	return function(arg2){
		return arg+arg2;
	}
}
console.log(addf(3)(4)===7);

var addf = num1 => num2 =>{
	return num1+num2;
}

console.log(addf(3)(4) === 7);

////////////////////////////////////////////////////////////////////////////////////////