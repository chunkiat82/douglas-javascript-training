import * as func from '../index';

var assert = require('assert');
describe('Exercise 1', function() {
  describe('#add', function () {
    it('should return 7', function () {    	
      assert.equal(7, func.add(3,4));
      assert.equal(-1, func.sub(3,4));
      assert.equal(12, func.mul(3,4));      
    });
  });
});

describe('Exercise 2', function() {
  describe('#identityf', function () {
    it('should return 3', function () {     
      assert.equal(3, func.identityf(3)());
      assert.equal(3, func.identityf6(3)());      
    });
  });
});

describe('Exercise 3', function() {
  describe('#addf', function () {
    it('should return 7', function () {     
      assert.equal(7, func.addf(3)(4));
      assert.equal(7, func.addf6(3)(4));      
    });
  });
});

describe('Exercise 4', function() {
  describe('#liftf add ', function () {
    it('should return 7', function () {     
      assert.equal(7, func.liftf(func.addf)(3)(4));      
    });
  });
  describe('#liftf mul', function () {
    it('should return 30', function () {     
      assert.equal(30, func.liftf(func.mulf)(5)(6));      
    });
  });
});


describe('Exercise 5', function() {
  describe('#curry', function () {
    it('should return 7', function () {     
      assert.equal(7, func.curry(func.addf,3)(4));
      assert.equal(7, func.curry6(func.addf,3)(4));
    });
  });
});

describe('Exercise 6', function() {
  describe('#inc1', function () {
    it('should return 22 for add and 121 for mul accordingly', function () {      
      assert.equal(6, func.inc1(5));
      assert.equal(7, func.inc1(func.inc1(5)));      
    });
  });
  describe('#inc2', function () {
    it('should return 22 for add and 121 for mul accordingly', function () {      
      assert.equal(6, func.inc2(5));
      assert.equal(7, func.inc2(func.inc2(5)));      
    });
  });
  describe('#inc3', function () {
    it('should return 22 for add and 121 for mul accordingly', function () {      
      assert.equal(6, func.inc3(5));
      assert.equal(7, func.inc3(func.inc3(5)));      
    });
  });
});

describe('Exercise 7', function() {
  describe('#twice', function () {
    it('should return 22 for add and 121 for mul accordingly', function () {      
      assert.equal(22, func.twice(func.add)(11));
      assert.equal(121, func.twice(func.mul)(11));
      assert.equal(22, func.twice6(func.add)(11));
      assert.equal(121, func.twice6(func.mul)(11));
    });
  });
});

describe('Exercise 8', function() {
  describe('#bus', function () {
    it('should return -1', function () {    	
      assert.equal(-1, func.bus(func.sub)(3,2));
      assert.equal(-1, func.bus6(func.sub)(3,2));
    });
  });
});

describe('Exercise 9', function() {
  describe('#composeb', function () {
    it('should return 35', function () {    	
      assert.equal(35, func.composeb(func.add,func.mul)(2,3,7));
      
    });
  });
});

describe('Exercise 10', function() {
  describe('#limit', function () {
    it('should return undefined if called more than once', function () { 
      var add_ltd = func.limit(func.add,1);
      assert.equal(7,add_ltd(3,4));
      assert.equal(undefined,add_ltd(3,4));      
    });
  });
});

describe('Exercise 11', function() {
  describe('#from', function () {
    it('should return 0,1,2,3', function () {       
      var index = func.from(0);
      assert.equal(0,index());
      assert.equal(1,index());
      assert.equal(2,index());
      assert.equal(3,index());      
    });
  });
});

describe('Exercise 12', function() {
  describe('#to', function () {
    it('should return 1,2,undefined', function () {       
      var index = func.to(func.from(1),3);
      assert.equal(1,index());
      assert.equal(2,index());
      assert.equal(undefined,index());      
    });
  });
});

describe('Exercise 13', function() {
  describe('#fromTo', function () {
    it('should return 1,2,undefined', function () {       
      var index = func.fromTo(0,3);
      assert.equal(0,index());
      assert.equal(1,index());
      assert.equal(2,index());
      assert.equal(undefined,index());      
    });
  });

  describe('#fromTo2', function () {
    it('should return 1,2,undefined', function () {       
      var index = func.fromTo2(0,3);
      assert.equal(0,index());
      assert.equal(1,index());
      assert.equal(2,index());
      assert.equal(undefined,index());      
    });
  });
});

describe('Exercise 14', function() {
  describe('#element', function () {
    it('should return b,c,d', function () {       
      var ele = func.element(['a','b','c','d'],func.fromTo(1,3));
      assert.equal('b',ele());
      assert.equal('c',ele());
      assert.equal(undefined,ele());      
    });
  });
  describe('#elementCorrect', function () {
    it('should return b,c,d', function () {       
      var ele = func.elementCorrect(['a','b','c','d'],func.fromTo(1,3));
      assert.equal('b',ele());
      assert.equal('c',ele());
      assert.equal(undefined,ele());      
    });
  });
});

describe('Exercise 15', function() {
  describe('#element', function () {
    it('should return b,c,d', function () {       
      var ele = func.elementOptional(['a','b','c','d']);
      assert.equal('a',ele());
      assert.equal('b',ele());
      assert.equal('c',ele());
      assert.equal('d',ele());
      assert.equal(undefined,ele());
    });
  });

  describe('#element', function () {
    it('should return b,c,d', function () {       
      var ele = func.elementOptional(['a','b','c','d'],func.fromTo(1,3));      
      assert.equal('b',ele());
      assert.equal('c',ele());      
      assert.equal(undefined,ele());
    });
  });
});

describe('Exercise 16', function() {
  describe('#collect', function () {
    it('should return 0,1,undefined and the array', function () {   
      var array = [];    
      var col = func.collect(func.fromTo(0,2), array);
      assert.equal(0,col());
      assert.equal(1,col());
      assert.equal(undefined,col());
      assert.deepEqual([0,1],array);
    });
  });
});

describe('Exercise 17', function() {
  describe('#filter', function () {
    it('should return 0,3 and undefined', function () {   
      var three = function(value){
        return (value % 3) === 0;
      }
      var fil = func.filter(func.fromTo(0,5),three);
      assert.equal(0,fil());
      assert.equal(3,fil());
      assert.equal(undefined,fil());      
    });
  });
});

describe('Exercise 18', function() {
  describe('#concat', function () {
    it('should return 0,3 and undefined', function () {   
      var three = function(value){
        return (value % 3) === 0;
      }
      var con = func.concat2(func.fromTo(0,3),func.fromTo(0,2));
      assert.equal(0,con());
      assert.equal(1,con());
      assert.equal(2,con());
      assert.equal(0,con());
      assert.equal(1,con());
      assert.equal(undefined,con());      
    });
  });
});

describe('Exercise 19', function() {
  describe('#gensymf', function () {
    it('should return G and H', function () {   
      var three = function(value){
        return (value % 3) === 0;
      }
      var geng = func.gensymf("G");
      var genh = func.gensymf("H");
      assert.equal("G1",geng());
      assert.equal("H1",genh());
      assert.equal("G2",geng());
      assert.equal("H2",genh());
    });
  });
});

describe('Exercise 20', function() {
  describe('#fibonaccif', function () {
    it('should numbers', function () {   
      var fib = func.fibonaccif(0,1);      
      assert.equal(0,fib());
      assert.equal(1,fib());
      assert.equal(1,fib());
      assert.equal(2,fib());
      assert.equal(3,fib());
      assert.equal(5,fib());
    });
  });
  describe('#fibonacciffast', function () {
    it('should numbers', function () {   
      var fib = func.fibonacciffast(0,1);      
      assert.equal(0,fib());
      assert.equal(1,fib());
      assert.equal(1,fib());
      assert.equal(2,fib());
      assert.equal(3,fib());
      assert.equal(5,fib());
    });
  });
});

describe('Exercise 21', function() {
  describe('#counter', function () {
    it('should go up and down', function () {         
      var counter = func.counter(10);      
      assert.equal(11,counter.up());
      assert.equal(10,counter.down());
      assert.equal(9,counter.down());
      assert.equal(10,counter.up());
    });
  });
   describe('#counter6', function () {
    it('should go up and down', function () {         
      var counter = func.counter6(10);      
      assert.equal(11,counter.up());
      assert.equal(10,counter.down());
      assert.equal(9,counter.down());
      assert.equal(10,counter.up());
    });
  });
});

describe('Exercise 22', function() {
  describe('#revocable', function () {
    it('should add or revoke', function () {         
      var revocable = func.revocable(func.add);      
      assert.equal(7,revocable.invoke(3,4));
      revocable.revoke();
      assert.equal(undefined,revocable.invoke(11,3));      
    });
  });
  describe('#revocable6', function () {
    it('should add or revoke', function () {         
      var revocable = func.revocablebinary6(func.add);      
      assert.equal(7,revocable.invoke(3,4));
      revocable.revoke();
      assert.equal(undefined,revocable.invoke(11,3));      
    })
  });
});

describe('Exercise 22', function() {
  describe('#addm', function () {
    it('should show value and source', function () {         
      var addResult1 = func.addm(func.m(3),func.m(4));
      assert.equal('{"value":7,"source":"(3+4)"}',JSON.stringify(addResult1));      
    });
  });
});

describe('Exercise 23', function() {
  describe('#liftm', function () {
    it('should show add value and source', function () {         
      var addm = func.liftm(func.add,"+");
      assert.equal('{"value":7,"source":"(3+4)"}',JSON.stringify(addm(func.m(3),func.m(4))));      
    });
  });
  describe('#liftm', function () {
    it('should show mul value and source', function () {         
      var mulm = func.liftm(func.mul,"*");
      assert.equal('{"value":12,"source":"(3*4)"}',JSON.stringify(mulm(func.m(3),func.m(4))));      
    });
  });
});

describe('Exercise 24', function() {
  describe('#liftm', function () {
    it('should show add value and source', function () {         
      var addm = func.liftm(func.add,"+");
      assert.equal('{"value":7,"source":"(3+4)"}',JSON.stringify(addm(3,4)));      
    });
  });
  describe('#liftm', function () {
    it('should show mul value and source', function () {         
      var mulm = func.liftm(func.mul,"*");
      assert.equal('{"value":12,"source":"(3*4)"}',JSON.stringify(mulm(3,4)));
    });
  });
});

describe('Exercise 25', function() {
  describe('#exp', function () {
    it('should return a evaluated or literal object ', function () {               
      var exp = func.exp;
      assert.equal(5,exp([func.mul,1,5]));
    });
  });
});

describe('Exercise 26', function() {
  describe('#exp', function () {
    it('should return a evaluated or literal object ', function () {               
      var exp = func.exp;
      var nae = [
      Math.sqrt, 
        [
          func.add,
          [func.square, 3],
          [func.square, 4]
        ]
      ];
      assert.equal(5,exp(nae));
    });
  });
});

describe('Exercise 27', function() {
  describe('#addg', function () {
    it('should return a evaluated value', function () {          
      var addg = func.addg;
      assert.equal(0, addg());
      assert.equal(2, addg(2)());
      assert.equal(9, addg(2)(7)());
      assert.equal(7, addg(3)(0)(4)());   
    });
  });
});


