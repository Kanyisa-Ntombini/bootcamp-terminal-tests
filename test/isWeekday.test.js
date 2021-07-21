'use strict';

let assert = require('assert');
let isWeekday = require('../modules/isWeekday');

describe('The isWeekday function should ', () => {
    it('should check if Monday is a weekday', () => {
        assert.strictEqual(true, isWeekday('Monday'));
    });

    it('should check if saturday is a weekday', () => {
        assert.strictEqual(false, isWeekday('saturday'));
    });

    it('should check if Thursday is a weekday', () => {
        assert.strictEqual(true, isWeekday('Thursday'));
    });

    it('should check if Saturday is a weekday', () => {
        assert.strictEqual(false, isWeekday('Saturday'));
    });
});