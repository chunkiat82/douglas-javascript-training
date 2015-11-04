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

describe('Exercise 4444', function() {
  describe('#addf', function () {
    it('should return 7', function () {     
      assert.equal(7, func.addf(3)(4));
      assert.equal(7, func.addf6(3)(4));      
    });
  });
});

describe('Exercise 5', function() {
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

describe('Exercise 6', function() {
  describe('#twice', function () {
    it('should return 22 for add and 121 for mul accordingly', function () {      
      assert.equal(22, func.twice(func.add)(11));
      assert.equal(121, func.twice(func.mul)(11));
      assert.equal(22, func.twice6(func.add)(11));
      assert.equal(121, func.twice6(func.mul)(11));
    });
  });
});

describe('Exercise 7', function() {
  describe('#bus', function () {
    it('should return -1', function () {    	
      assert.equal(-1, func.bus(func.sub)(3,2));
      assert.equal(-1, func.bus6(func.sub)(3,2));
    });
  });
});

describe('Exercise 8', function() {
  describe('#composeb', function () {
    it('should return 35', function () {    	
      assert.equal(35, func.composeb(func.add,func.mul)(2,3,7));
      
    });
  });
});

describe('Exercise 9', function() {
  describe('#limit', function () {
    it('should return undefined if called more than once', function () { 
      var add_ltd = func.limit(func.add,1);
      assert.equal(7,add_ltd(3,4));
      assert.equal(undefined,add_ltd(3,4));      
    });
  });
});

describe('Exercise 10', function() {
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

describe('Exercise 11', function() {
  describe('#to', function () {
    it('should return 1,2,undefined', function () {       
      var index = func.to(func.from(1),3);
      assert.equal(1,index());
      assert.equal(2,index());
      assert.equal(undefined,index());      
    });
  });
});

describe('Exercise 12', function() {
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