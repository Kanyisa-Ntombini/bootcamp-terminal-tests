'use strict';

let assert = require('assert');
let transportFee = require('../modules/transportFee');

describe('The transportFee function ', () => {
    it('should check how much the fee is for the morning shift', () => {
        assert.strictEqual('R20', transportFee('morning'));
    });

    it('should check how much the fee is for the afternoon shift', () => {
        assert.strictEqual('R10', transportFee('afternoon'));
    });

    it('should check how much the fee is for the nightshift', () => {
        assert.strictEqual('free', transportFee('nightshift'));
    });

    it('should check how much the fee is for when "Strawberry Pie" is entered', () => {
        assert.strictEqual('Please enter morning, afternoon or nightshift', transportFee('Strawberry Pie'));
    });

    it('should check how much the fee is for when 1000 is entered', () => {
        assert.strictEqual('Please do not enter a number', transportFee(1000));
    });

    it('should check how much the fee is for when an empty string is entered', () => {
        assert.strictEqual('Please enter morning, afternoon or nightshift', transportFee(''));
    });
});