var gulp = require('gulp'),
    inlineCss = require('gulp-inline-css');

gulp.task('optimize', function() {
    return gulp.src('src/*.html')
        .pipe(inlineCss({
                applyStyleTags: true,
                applyLinkTags: true,
                removeStyleTags: true,
                removeLinkTags: true
        }))
        .pipe(gulp.dest('dest/'));
    });

var gulp = require('gulp');
var uncss = require('gulp-uncss');

gulp.task('style', function () {
    return gulp.src('src/views/css/bootstrap-grid.css')
        .pipe(uncss({
            html: ['src/index.html', 'src/views/pizza.html']
        }))
        .pipe(gulp.dest('dest/views/css/bootstrap-grid.css'));
});