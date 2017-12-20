
var rimraf = require('rimraf');

rimraf('./source/**/*.txt', function (e) {

    console.log(e);
    console.log('okay');

});
