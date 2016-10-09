const gulp = require('gulp');
const babel = require('gulp-babel');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

gulp.task('js combine', () => {
    return gulp.src(['app/js/app.js', 'src/js/scripts/*.js'])
        .pipe(concat('main.js'))
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('app/js/'));
});

gulp.task('sass', () => {
    return gulp.src('src/sass/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('app/css/'));
});

gulp.task('build',['sass', 'js combine']);

gulp.task('watch', () => {
    gulp.watch(['app/js/app.js', 'src/js/scripts/*'], ['js combine']);
    gulp.watch('src/sass/*', ['sass']);
});
