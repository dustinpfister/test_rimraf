
var rimraf = require('rimraf');

rimraf('./test0.txt', {

    disableGlob : true

}, function (e) {

    console.log(e);
    console.log('okay');

});
