/*global describe, before, beforeEach, it*/
'use strict';

var connect = require('connect');
var request = require('supertest');
var errorDocument = require('..');

describe('connect-error-document module', function () {
    var app, error;

    before(function () {
        app = connect();
        app.use(function (req, res, next) {
            next(error);
        });
        app.use(errorDocument(__dirname + '/public'));
    });

    beforeEach(function () {
        error = null;
    });

    it('responds with 404.html page', function (done) {
        error = {status: 404};

        request(app)
            .get('/404-NotFound')
            .expect('Content-Type', 'text/html; charset=utf-8')
            .expect(404, /404 Not Found/, done);
    });

    it('responds with default error page if no error document exists', function (done) {
        error = {status: 403};

        request(app)
            .get('/403')
            .expect(403, done);
    });
});
