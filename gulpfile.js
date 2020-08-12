const { src, dest } = require('gulp');

function copy() {
   return src('node_modules/fg-factory/src/*.js')
    .pipe(dest('demo/lib/'));
}

exports.default = copy;