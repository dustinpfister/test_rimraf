var fs = require('fs'),
path = require('path'),
mkdirp = require('mkdirp');

// make a path of do nothing
var mkPath = function (p) {

    return new Promise(function (resolve, reject) {

        mkdirp(p, function (e) {

            if (e) {

                reject(e);

            }

            resolve();

        });

    });

},

// make a file
mkFile = function (p, end, prefix, data) {

    p = p || '.source';
    end = end || '.txt';
    prefix = prefix || 'test_';
    data = data || 'test_data';

    return new Promise(function (resolve, reject) {

        mkPath(p).catch (function (e) {

            reject(e);

        }).then(function () {

            fs.writeFile(path.join(p, prefix + end), data, 'utf-8', function (e) {

                if (e) {

                    reject(e)

                }

                resolve();

            });

        });

    });

};

// make files
exports.mkFiles = function (options) {

    options = options || {};

    var p = options.p || './source',
    type = options.type || '.txt',
    count = options.count || 10,
    prefix = options.prefix || 'test_';

    console.log('making files.');

    var i = 0;
    var make = function () {

        var fix = prefix + i;

        mkFile(p, type, fix).then(function () {

            console.log(p + '/' + fix + type);

            i += 1;

            if (i < count) {

                make();

            }

        }).catch (function (e) {

            console.log(e)

        });

    };

    make();

};

