/*global describe, it*/
'use strict';

var assert = require('chai').assert;

describe('connect-error-document module', function () {
    it('can be imported without blowing up', function () {
        var app = require('..');

        assert.isDefined(app, 'connect-error-document module was not required successfully');
        assert.isFunction(app, 'connect-error-document module is not a function');
    });

    it('is a function', function () {
        var app = require('..');

        assert.isFunction(app, 'connect-error-document module is not a function');
    });
});
