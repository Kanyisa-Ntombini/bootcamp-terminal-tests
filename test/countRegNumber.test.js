'use strict';

let assert = require('assert');
let countRegNumber = require('../modules/countRegNumber');

describe('The countRegNumber function should ', () => {
    it('should count how many registration numbers does "CA 3333, 345 EC, GP 3334" have', () => {
        assert.strictEqual(3, countRegNumber('CA 3333, 345 EC, GP 3334'));
    });

    it('should count how many registration numbers does "" have', () => {
        assert.strictEqual(0, countRegNumber(''));
    });

    it('should count how many registration numbers does "," have', () => {
        assert.strictEqual(0, countRegNumber(','));
    });
});