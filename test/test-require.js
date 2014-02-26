/*global describe, it*/
'use strict';

var assert = require('chai').assert;

describe('connect-error-document module', function () {
    it('can be imported without blowing up', function () {
        var module = require('..');

        assert.isDefined(module, 'connect-error-document module was not required successfully');
        assert.isFunction(module, 'connect-error-document module is not a function');
    });

    it('is a function', function () {
        var module = require('..');

        assert.isFunction(module, 'connect-error-document module is not a function');
    });
});
