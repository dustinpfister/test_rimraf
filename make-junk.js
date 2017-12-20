var mkFiles = require('./mkfiles.js');

mkFiles.mkFiles();
mkFiles.mkFiles({

    p: './source/css',
    type: '.css'

});
mkFiles.mkFiles({

    p: './source/html',
    type: '.html'

});
