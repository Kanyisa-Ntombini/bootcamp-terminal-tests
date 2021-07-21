'use strict';

let assert = require('assert');
let totalPhoneBill = require('../modules/totalPhoneBill');

describe('The totalPhoneBill function' , () => {
    it('should return R7.45 for "call, sms, call, sms, sms"' , () => {
        assert.strictEqual("R7.45", totalPhoneBill('call, sms, call, sms, sms'));
    });

    it('should return R8.25 for "call, call, call"' , () => {
        assert.strictEqual("R8.25", totalPhoneBill('call, call, call'));
    });

    it('should return R4.55 for "sms, sms, sms, sms, sms, sms, sms"' , () => {
        assert.strictEqual("R4.55", totalPhoneBill('sms, sms, sms, sms, sms, sms, sms'));
    });

    it('should return R0.00 for "Apples, bananas, pears"' , () => {
        assert.strictEqual("R0.00", totalPhoneBill('Apples, bananas, pears'));
    });

    it('should return "Please enter a string" for 455' , () => {
        assert.strictEqual("Please enter a string", totalPhoneBill(455));
    });
});