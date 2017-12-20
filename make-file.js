var fs = require('fs');

var make = (function () {

    var i = 0;

    return {

        files : function (end, ct, done) {

            end = end || '.txt';
            ct = ct || 10;
            done = done || function () {};

            fs.writeFile('./source/test_' + i + end, 'test data', 'utf8', function () {

                console.log('we have a file.');

                if (i < 10) {

                    i += 1;

                    make.files(end, ct);

                } else {

                    done();

                }

            });

            i += 1;

        }

    };

}
    ());

make.files();

// writeFiles('.txt');
// writeFiles('.html');
