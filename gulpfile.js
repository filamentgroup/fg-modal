const { src, dest } = require('gulp');

function copy() {
   return src([
       'node_modules/fg-factory/src/*.js', 
    'node_modules/wicg-inert/dist/inert.js', 
        'node_modules/document-register-element/build/document-register-element.js'])
    .pipe(dest('demo/lib/'));
}

// var qunit = require('gulp-qunit');
 
// gulp.task('test', function() {
//     return gulp.src('./test/index.html')
//         .pipe(qunit());
// });

exports.default = copy;