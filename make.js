var fs = require('fs'),
mkdirp = require('mkdirp');

var make = (function () {

    var i = 0;

    return {

        files: function (end, ct, done) {

            end = end || '.txt';
            ct = ct || 10;
            done = done || function () {};

            mkdirp('./source', function () {

                fs.writeFile('./source/test_' + i + end, 'test data', 'utf8', function (e) {

                    if (e) {

                        console.log(e);

                    } else {

                        console.log('we have a file.');

                        if (i < 10) {

                            i += 1;

                            make.files(end, ct);

                        } else {

                            done();

                        }

                    }

                });

            });

            i += 1;

        }

    };

}
    ());

make.files();

// writeFiles('.txt');
// writeFiles('.html');
