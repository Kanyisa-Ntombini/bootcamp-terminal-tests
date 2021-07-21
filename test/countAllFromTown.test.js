'use strict';

let assert = require('assert');
let countAllFromTown = require('../modules/countAllFromTown');

describe('The countAllFromTown function ', () => {
    it('should count how many of these registration numbers are from Stellenbosch here: "CL 345 123, CJ 2345, CL 123-546, CK 345, CJ 123"', () => {
        assert.strictEqual(2, countAllFromTown('CL 345 123, CJ 2345, CL 123-546, CK 345, CJ 123', 'CL'));
    });

    it('should count how many of registration numbers are from the Eastern Cape: "CJ 345 123, EC 345, EC 123"', () => {
        assert.strictEqual(2, countAllFromTown('CJ 345 123, EC 345, EC 123', 'EC'));
    });

    it('should count how many of registration numbers are from Bellville: "GP 2231, FF 5655 MP"', () => {
        assert.strictEqual(0, countAllFromTown('GP 2231, FF 5655 MP', 'CY'));
    });

    it('should count how many of registration numbers are here: ""', () => {
        assert.strictEqual(0, countAllFromTown('', 'MP'));
    });

    it('should count how many of registration numbers are here: ","', () => {
        assert.strictEqual(0, countAllFromTown(',', 'GP'));
    });

    it('should count how many of registration numbers are here: 23', () => {
        assert.strictEqual('Please do not enter a number', countAllFromTown(23, 'DC'));
    });

});