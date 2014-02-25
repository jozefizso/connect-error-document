# connect-error-document

[![build status](https://secure.travis-ci.org/jozefizso/connect-error-document.png)](http://travis-ci.org/jozefizso/connect-error-document)
[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

Error document middleware for Connect server.

## Installation

To install connect-error-document from npm, run:

``` bash
$ npm install connect-error-document
```

## Example Usage

``` js
var connect = require('connect');
var app = connect();

var errorDocument = require('connect-error-document');
app.use(errorDocument());
```

## License

[MIT](LICENSE)
