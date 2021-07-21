'use strict';

let assert = require('assert');
let regCheck = require('../modules/regCheck');

describe ('The regCheck function should', () => {
    it('check if CA 3333 is from Cape Town', () => {
        assert.strictEqual(true, regCheck('CA 3333', 'CA'));
    });

    it('check if CY 6543 is from Gauteng', () => {
        assert.strictEqual(false, regCheck('CY 6543', 'GP'));
    });

    it('check if BSD 221 EC is from the Eastern Cape', () => {
        assert.strictEqual(true, regCheck('BSD 221 EC', 'EC'));
    });
})