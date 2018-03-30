'use strict';

const math = require('../lib/arithmetic');
// const Sub = require('../lib/arithmetic');

describe('#add', () => {

    it('should return null when input are not valid numbers', () => {
        expect(math.add()).toBeNull();
        expect(math.add('1337', '80085')).toBeNull();
        expect(math.add([8008135])).toBeNull();
    });

    it('should return sum of valid input', () => {
        expect(math.add(1000, 4000)).toEqual(5000);
        expect(math.add(16, 40)).toEqual(56);
        expect(math.add(40044, 40041)).toEqual(80085);
    });
});

describe('#sub', () => {

    it('should return null when input are not valid numbers', () => {
        expect(math.sub()).toBeNull();
        expect(math.sub(1337)).toBeNull();
        expect(math.sub(['80085'])).toBeNull();
    });

    it('should return subtracted value of valid input', () => {
        expect(math.sub(100, 300)).toEqual(200);
        expect(math.sub(10, 5)).toEqual(-5);
        expect(math.sub(1573, 81658)).toEqual(80085);
    });
});