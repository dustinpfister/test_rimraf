
var rimraf = require('rimraf');

rimraf('./source/**/*.txt', function (e) {

    if (e) {

        console.log(e);

    } else {

        console.log('done');

    }

});
