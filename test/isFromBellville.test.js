'use strict';

let assert = require('assert');
let isFromBellville = require('../modules/isFromBellville');

describe('The sFromBellville function should ', () => {
    it('should check if CY 3333 is from Bellville', () => {
        assert.strictEqual(true, isFromBellville('CY 3333'));
    });

    it('should check if CZ 9999 is from Bellville', () => {
        assert.strictEqual(false, isFromBellville('CZ 9999'));
    });
});