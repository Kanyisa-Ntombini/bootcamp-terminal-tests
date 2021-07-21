'use strict';

let assert = require('assert');
let yearsAgo = require('../modules/yearsAgo');

describe('The yearsAgo function should ', () => {
    it('should calculate how many years ago was 1923', () => {
        assert.strictEqual(98, yearsAgo(1923));
    });

    it('should calculate how many years ago was 2000', () => {
        assert.strictEqual(21, yearsAgo(2000));
    });

    it('should calculate how many years ago was "1980"', () => {
        assert.strictEqual(41, yearsAgo('1980'));
    });

    it('should calculate how many years ago was 2021', () => {
        assert.strictEqual(0, yearsAgo(2021));
    });

    it('should calculate how many years ago was "cat"', () => {
        assert.strictEqual("Please enter a number only", yearsAgo('cat'));
    });

    it('should calculate how many years ago was ","', () => {
        assert.strictEqual("Please enter a number only", yearsAgo(','));
    });
});