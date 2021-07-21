'use strict';

let assert = require('assert');
let findItemsOver = require('../modules/findItemsOver');

describe('The findItemsOver function' , function(){
    var itemList = [
        {name : 'apples', qty : 10},
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
        {name : 'pineapples', qty : 3},
        {name : 'plums', qty : 50},
        {name : 'guavas', qty : 15},
        {name : 'mangoes', qty : 5}
    ];

    it('should return a list of all products with quantities over 25' , function(){
        var expectedResult = [{
          name: "pears",
          qty: 37
        }, {
          name: "bananas",
          qty: 27
        }, {
          name: "plums",
          qty: 50
        }];

        assert.deepEqual(expectedResult,findItemsOver(itemList, 25));
    });

    it('should return a list of all products with quantities over a certain amount' , function(){
        var expectedResult = [{
          name: "plums",
          qty: 50
        }];
        assert.deepEqual(expectedResult,findItemsOver(itemList, 40));
    });
      
    it('should return a list of all products with quantities over a 5' , function(){
        var expectedResult = [{
          name: "apples",
          qty: 10
        }, {
          name: "pears",
          qty: 37
        }, {
          name: "bananas",
          qty: 27
        }, {
          name: "plums",
          qty: 50
        }, {
          name: "guavas",
          qty: 15
        }];

        assert.deepEqual(expectedResult,findItemsOver(itemList, 5));
    });

    it('should return a list of all products with quantities over a 100' , function(){
      var expectedResult = [];

      assert.deepEqual(expectedResult,findItemsOver(itemList, 100));
  });
});