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