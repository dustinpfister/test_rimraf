var mkFiles = require('./mkfiles.js');

// source/
mkFiles.mkFiles({

    p: './source',
    type: '.txt'

});

// source/html
mkFiles.mkFiles({
    p: './source/html',
    type: '.txt'
});
mkFiles.mkFiles({

    p: './source/html',
    type: '.html'

});

// source/html/css
mkFiles.mkFiles({
    p: './source/html/css',
    type: '.txt'
});
mkFiles.mkFiles({

    p: './source/html/css',
    type: '.css'

});