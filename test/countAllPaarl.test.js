'use strict';

let assert = require('assert');
let countAllPaarl = require('../modules/countAllPaarl');

describe('The yearsAgo function should ', () => {
    it('should calculate how many years ago was 1923', () => {
        assert.strictEqual(98, yearsAgo(1923));
    });

    
});