var fs = require('fs'),
path = require('path'),

matchPat = /\.txt$/,

readDir = function (dir, forItem) {

    forItem = forItem || function (itemLoc) {
        console.log(itemLoc)
    };

    // read the given dir
    fs.readdir(dir, function (err, content) {

        // for all contents in the path
        content.forEach(function (item) {

            itemLoc = path.join(dir, '/' + item);

            // if a dir, continue recursively
            if (fs.lstatSync(itemLoc).isDirectory()) {

                readDir(itemLoc, forItem);

            }

            // log the current item
            forItem(itemLoc);

        });

    });

};

// call readDir with the given forItem method.
readDir('./source', function (itemLoc) {

    // if there is a match
    if (itemLoc.match(matchPat)) {

        console.log(itemLoc.match(matchPat));

        // unlink (delete)
        fs.unlink(itemLoc, function (e) {

            if (e) {

                console.log(e);

            }

        });

    }

});
