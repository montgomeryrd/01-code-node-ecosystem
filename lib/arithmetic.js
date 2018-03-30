'use strict';

const math = module.exports = {
    add: function(a, b){
        return (typeof a === 'number' && typeof b === 'number') ? a + b : null;
    },

    sub: function(a, b){
        return (typeof a === 'number' && typeof b === 'number') ? b - a : null;
    }
};