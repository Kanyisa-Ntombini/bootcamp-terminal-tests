'use strict';

let assert = require('assert');
let greet = require('../modules/greet');

describe('The Greet function should ', () => {
    it('should greet Spring correctly', () => {
        assert.strictEqual('Hello, Spring', greet('Spring'));
    });

    it('should greet Autumn correctly', () => {
        assert.strictEqual('Hello, Autumn', greet('Autumn'));
    });
});