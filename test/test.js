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
  describe('#element', function () {
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