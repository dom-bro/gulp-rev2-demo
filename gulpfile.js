const gulp = require('gulp');
const rev2 = require('gulp-rev2');

gulp.task('build:css', ()=>{
    return gulp.src('./demo/**/*.css')
        .pipe(rev2.update())
        .pipe(gulp.dest('dist'))
});
gulp.task('build:image', ()=>{
    return gulp.src('./demo/**/*.{png,jpg,gif,ico}')
        .pipe(rev2())
        .pipe(gulp.dest('dist'))
        .pipe(rev2.manifest())
        .pipe(gulp.dest('.'));
});