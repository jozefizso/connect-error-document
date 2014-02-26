'use strict';

var fs = require('fs');

module.exports = function errorDocument(options) {
    options = options || {};

    // Accept root dir
    if ('string' === typeof options) {
        options = { root: options };
    }
    if (!options.root) {
        options.root = 'public';
    }

    return function errorDocument(err, req, res, next) {
        if (err.status) {
            res.statusCode = err.status;
        }

        var path = options.root + '/' + res.statusCode + '.html';

        fs.readFile(path, 'utf8', function (err, str) {
            if (err) {
                return next(err);
            }

            res.setHeader('Content-Type', 'text/html; charset=utf-8');
            res.end(str);
        });
    };
};
