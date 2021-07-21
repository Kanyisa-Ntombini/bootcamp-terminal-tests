'use strict';

let assert = require('assert');
let countAllPaarl = require('../modules/countAllPaarl');

describe('The countAllPaarl function should ', () => {
    it('should count how many of registration numbers are here: "CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123"', () => {
        assert.strictEqual(3, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'));
    });

    it('should count how many of registration numbers are here: "CJ 345 123, CK 345, CJ 123"', () => {
        assert.strictEqual(2, countAllPaarl('CJ 345 123, CK 345, CJ 123'));
    });

    it('should count how many of registration numbers are here: "GP 2231, FF 5655 MP"', () => {
        assert.strictEqual(0, countAllPaarl('GP 2231, FF 5655 MP'));
    });

    it('should count how many of registration numbers are here: ""', () => {
        assert.strictEqual(0, countAllPaarl(''));
    });

    it('should count how many of registration numbers are here: ","', () => {
        assert.strictEqual(0, countAllPaarl(','));
    });

    it('should count how many of registration numbers are here: 23', () => {
        assert.strictEqual('Please do not enter a number', countAllPaarl(23));
    });

});