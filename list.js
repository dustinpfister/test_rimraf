var fs = require('fs');

fs.readdir('./source', function (e, files) {

    if (e) {

        console.log(e);

    } else {

        console.log(files)

    }

});
