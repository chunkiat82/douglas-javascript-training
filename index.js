export let add = (x,y) => {
    return x+y;
}

export let sub = (x,y) => {
    return add(x,-y);
}

export let mul = (x,y) => {	
    return x * y;
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

export var mulf =function mulf(arg){
	return function(arg2){
		return arg*arg2;
	}
}


export  var liftf = function liftf(func){
	return function(x){
		return function (y){
			return func(x)(y);
		}
	}
}

export  let liftf6 = func => x => y=> {
	return func(x)(y);
}

////////////////////////////////////////////////////////////////////////////////////////

export var curry = function curry(func, x){
	return function (y){
		return func(x)(y);
	}
}

export  let curry6 = (func, x) => y=> {
	return func(x)(y);
}

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

export var element = function(array, func){
	return function(){
		return array[func()]
	}
}

export var elementCorrect = function(array, func){
	return function(){
		var index = func();
		if (index !== undefined){
			return array[index];
		}	
	}
}

////////////////////////////////////////////////////////////////////////////////////////


export var elementOptional = function(array, func){
	var index = -1;
	return function(){
		if (func !== undefined){
			index = func();
		}else{
			index += 1;
		}

		if (index !== undefined){
			return array[index];
		}	
	}
}

////////////////////////////////////////////////////////////////////////////////////////

export var collect = function (func, array){
	return function(){
		var value = func();
		if (value !== undefined){
			array.push(value)
			return value;	
		}
		return;		
	}
}


////////////////////////////////////////////////////////////////////////////////////////
export var filter = function filter(func1, func2){
	return function(){
		var value = func1();
		if (value !== undefined){
			if (func2(value)){
				return value;
			}else{
				return filter(func1, func2)();
			}	
		}
	}
}

////////////////////////////////////////////////////////////////////////////////////////

export var concat  = function concat(func1, func2){
	return function(){
		var value = func1();
		if (value !== undefined){			
				return value;
		}else{
			value = func2();
			if (value != undefined){
				return value;
			}
		}
	}
}

export var concat2  = function concat2(func1, func2){
	var gen = func1;
	return function(){
		var value = gen();
		if (value !== undefined){			
			return value;
		}else{
			gen = func2;
		}
		return gen();
	}
}

// export let concat3 = function concat3(...func){
// 	const next = elements(func);
// 	let gen = next();
// 	return function(){
// 		var value = gen();
// 		if (value !== undefined){			
// 			return value;
// 		}else{
// 			gen = next();
// 		}
// 		return gen();
// 	}
// }

////////////////////////////////////////////////////////////////////////////////////////

export var gensymf = function(prefix){
	var index = 1;
	return function(){
		var value = String(prefix)+index;
		index += 1;		
		return value;
	}
}

////////////////////////////////////////////////////////////////////////////////////////

export var fibonaccif = function(x,y){
	return concat(elementOptional([x,y]), function fibonacci(){
		var next = x + y;
		x = y;
		y = next;
		return next;
	});
}

export var fibonacciffast = function(x,y){	
	return function(){
		var next = x;
		x = y;
		y = y + next;
		return next;
	};
}

////////////////////////////////////////////////////////////////////////////////////////

export var counter = function(i){
	return {
		up : function(){
			return ++i;
		},
		down : function(){
			return --i;
		}
	}
}

export let counter6 = i => {
	return {
		up: () => ++i ,
		down: () => --i
	}
}

////////////////////////////////////////////////////////////////////////////////////////

export var revocable = function(func){
	var revoked = false;
	return {
		invoke: function(x,y){
			return revoked ? undefined : func(x,y);
		},
		revoke: function(){
			revoked = true;
		}
	}
}

export let revocable6 = (func) => {
	let revoked = false;
	return {
		invoke: (x,y) => revoked ? undefined : func(x,y),
		revoke: () => { revoked = true }
	}
}

export let revocablebinary6 = (binary) => {
	return {
		invoke: (x,y) => binary !== undefined ? binary(x,y) : undefined,
		revoke: () => { binary = undefined }
	}
}

////////////////////////////////////////////////////////////////////////////////////////

export var m = function(value, source) {
	return {
		value:value,
		source: (typeof source === 'string')
			? source
			: String(value)
	};
}

export let addm = (m1,m2) => {	
	return m(m1.value+m2.value, "("+m1.source+"+"+m2.source+")");
}

////////////////////////////////////////////////////////////////////////////////////////

export let liftm = (func, operator) => {
	return (m1,m2) => {
		return m(func(m1.value || m1, m2.value || m2 ), "("+(m1.source || m1) +operator+ (m2.source || m2)+")");
	}
}

export let liftm1																																									 = (func, operator) => {
	return (m1,m2) => {
		if (typeof m1 === 'number'){
			m1 = m(m1)
		}
		if (typeof m2 === 'number'){
			m2 = m(m2)
		}
		return m(func(m1, m2), "("+m1+operator+m2+")");
	}
}

////////////////////////////////////////////////////////////////////////////////////////


export var exp = function(input){

	if (Array.isArray(input)){
		var func = input[0];
		var n1 = exp(input[1]);
		var n2 = exp(input[2]);		
		return func(n1,n2);		
	}else {
		return input;
	}
}

////////////////////////////////////////////////////////////////////////////////////////

export var addg = function(input1){		
	if (input1 === undefined){
		return undefined;
	}

	return function(input2){
		if (input2 === undefined)
			return input1;
		else{
			return addg1(input2 + input1);
		}
	}
}

export var addgAlternate = function(input1){	
	
	function x(input2){
		if (input2 === undefined)
			//returning the sum (input)
			return input1; 
		else{
			return addgAlternate(input2 + input1);
		}
	}
	return input1 === undefined ? undefined : x;
}

/*
2
function(input2){
	if (input2 === undefined)
		return input1;
	else{
		return addg(input2 + input1);
	}
}(7) ->
9
function(input2){
	if (input2 === undefined)
		return input1;
	else{
		return addg(input2 + input1);
	}
}() ->
9 which is input
*/

export var addg1 = function(input1){		
	return input1 === undefined ? undefined : function(input2){
		if (input2 === undefined)
			return input1;
		else{
			return addg1(input2 + input1);
		}
	}
}

export let addg5 = input1 => {		
	return input1 === undefined ? undefined : input2 => {
		if (input2 === undefined)
			return input1;
		else{
			return addg5(input2 + input1);
		}
	}
}

export let addg6 = input1 => {
	return input1 === undefined ? undefined : input2 => {
		return input2 === undefined ? input1 : addg6(input2 + input1);
	}
}

////////////////////////////////////////////////////////////////////////////////////////

export var liftg = function(input){
	
	var func = input;
	return function x(input2){		
		var total = 1;
		if (input2 === undefined){
			return undefined;
		}
		function y(input3){
			if (input3 === undefined){
				return total;
			}
			total = func(input3,total);			
			return y;
		}
		return y(input2);
	}

}

////////////////////////////////////////////////////////////////////////////////////////

export var arrayg = function(input){
	var array = [];	
	if (input === undefined){			
		return array;
	}
	function x(input2){
		if (input2 === undefined){			
			return array;
		}
		array.push(input2);
		return x; 
	}
	return x(input);
	
}

////////////////////////////////////////////////////////////////////////////////////////

/* make a function continuize that takes a unary 
function and returns a function that takes a callback and an argument
*/

export var continuize = function(func){
	return function(cb, value){
		return cb(func(value));
	}
}

// continuize(Math.sqrt)(console.log,81);

////////////////////////////////////////////////////////////////////////////////////////
