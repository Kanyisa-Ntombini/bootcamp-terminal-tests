'use strict';

let assert = require('assert');
let findItemsOver20 = require('../modules/findItemsOver20');

describe('The findItemsOver20 function' , function(){
    /* === TEST 1 === */
    it('should return a list of all products with quantities over 20' , function(){
        var itemList = [
          {name : 'apples', qty : 10},
          {name : 'pears', qty : 37},
          {name : 'bananas', qty : 27},
          {name : 'pineapples', qty : 3},
          {name : 'plums', qty : 50},
          {name : 'guavas', qty : 15},
          {name : 'mangoes', qty : 5}
        ];

        var expectedResult = [{
          name: "pears",
          qty: 37
        }, {
          name: "bananas",
          qty: 27
        }, {
          name: "plums",
          qty: 50
        }]
        assert.deepEqual(expectedResult, findItemsOver20(itemList));
    });

    /* === TEST 2 === */
    it('should return a list of all products with quantities over 20' , function(){
      var itemList = [
        {name : 'bananas', qty : 27},
        {name : 'pineapples', qty : 3},
        {name : 'plums', qty : 50},
        {name : 'guavas', qty : 15}
      ];

      var expectedResult = [{
        name: "bananas",
        qty: 27
      }, {
        name: "plums",
        qty: 50
      }]

      assert.deepEqual(expectedResult, findItemsOver20(itemList));
  });

  /* === TEST 3 === */
  it('should return a list of all products with quantities over 20' , function(){
    var itemList = [
      {name : 'bananas', qty : 27},
      {name : 'pineapples', qty : 3},
      {name : 'plums', qty : 50},
      {name : 'guavas', qty : 15},
      {name : 'carrots', qty : 2},
      {name : 'spinach', qty : 4},
      {name : 'potatoes', qty : 50}
    ];

    var expectedResult = [{
      name: "bananas",
      qty: 27
    }, {
      name: "plums",
      qty: 50
    }, {
      name: "potatoes",
      qty: 50
    }]

    assert.deepEqual(expectedResult, findItemsOver20(itemList));
});

});