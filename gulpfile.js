const { parallel, series, watch, src, dest } = require('gulp');
const babel = require('gulp-babel');

function copy() {
   return src([
    'node_modules/wicg-inert/dist/inert.js', 
    'node_modules/document-register-element/build/document-register-element.js'])
    .pipe(dest('demo/lib/'));
}

function es5() {
    return src('src/fg-modal.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(dest('demo/es5/'));
}

// var qunit = require('gulp-qunit');
 
// gulp.task('test', function() {
//     return gulp.src('./test/index.html')
//         .pipe(qunit());
// });





exports.default = series(copy, es5);