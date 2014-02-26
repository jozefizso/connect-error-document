'use strict';

var fs        = require('fs'),
    parse     = require('url').parse,
    path      = require('path'),
    normalize = path.normalize,
    join      = path.join;

module.exports = function errorDocument(options) {
    options = options || {};

    // Accept root dir
    if ('string' === typeof options) {
        options = { root: options };
    }
    if (!options.root) {
        options.root = 'public';
    }

    return function errorDocument(req, res, next) {
        var handleError = function (statusCode, next) {
            var filename = join(options.root, statusCode + '.html');

            fs.readFile(filename, 'utf8', function (err, html) {
                if (err) {
                    return ('ENOENT' === err.code) ? next() : next(err);
                }

                res.statusCode = statusCode;
                res.setHeader('Content-Type', 'text/html; charset=utf-8');
                res.end(html);
            });
        };

        var url = parse(req.url),
            dir = decodeURIComponent(url.pathname),
            path = normalize(join(options.root, dir));

        // null byte(s), bad request
        if (path.indexOf('\0') >= 0) {
            return handleError(404, next);
        }

        // malicious path, forbidden
        if (0 !== path.indexOf(options.root)) {
            return handleError(403, next);
        }

        // check if we have a directory
        fs.stat(path, function (err, stat) {
            if (err) {
                return handleError('ENOENT' === err.code ? 404 : 500);
            }

            next();
        });
    };
};
