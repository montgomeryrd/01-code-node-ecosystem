'use strict';

const Greet = require('../lib/greet');

describe('#Greet', () => {

    it('should return null when input is not a valid string', () => {
        expect(Greet()).toBeNull();
        expect(Greet(1337)).toBeNull();
        expect(Greet(['banana'])).toBeNull();
    });

    it('should return "Greetings World!', () => {
        expect(Greet('World')).toEqual('Greetings World!');
    });
});



// #### Greet Module Tests
// * Write a test that expects the greet module to return `null` when you supply non string values
// * Write a test the expects the greet module to return `'Greetings world'`
//   * This should happen when invoked with `'world'` as the first argument