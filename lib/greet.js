'use strict';

module.exports = function greet(name) {
    return (typeof name === 'string') ? `Greetings ${name}!` : null;
};