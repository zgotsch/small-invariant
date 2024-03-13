(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.invariant = factory());
})(this, (function () { 'use strict';

    process.env.NODE_ENV === 'production';
    var prefix = 'Invariant failed';
    function invariant(condition, message) {
        if (condition) {
            return;
        }
        var provided = typeof message === 'function' ? message() : message;
        var value = provided ? "".concat(prefix, ": ").concat(provided) : prefix;
        throw new Error(value);
    }

    return invariant;

}));
