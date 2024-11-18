import gulp from 'gulp';
import sass from 'gulp-sass';
import dartSass from 'sass';
import concat from 'gulp-concat';
import terser from 'gulp-terser';
import cleanCSS from 'gulp-clean-css';
import imagemin from 'gulp-imagemin';
import browserSync from 'browser-sync';

const sassCompiler = sass(dartSass);
const bs = browserSync.create();

// SCSS Task
gulp.task('scss', () => {
    return gulp.src('scss/**/*.scss')
        .pipe(sassCompiler().on('error', sassCompiler.logError))
        .pipe(cleanCSS())
        .pipe(gulp.dest('css'))
        .pipe(bs.stream());
});

// JavaScript Task
gulp.task('js', () => {
    return gulp.src('js/**/*.js')
        .pipe(concat('index.js'))
        .pipe(terser())
        .pipe(gulp.dest('dist/js'))
        .pipe(bs.stream());
});

// Image Optimization
gulp.task('images', () => {
    return gulp.src('images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
});

// Build Task
gulp.task('build', gulp.parallel('scss', 'js', 'images'));

// Watch Task
gulp.task('watch', () => {
    bs.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('scss/**/*.scss', gulp.series('scss'));
    gulp.watch('js/**/*.js', gulp.series('js'));
    gulp.watch('images/**/*', gulp.series('images'));
    gulp.watch('*.html').on('change', bs.reload);
});

gulp.task('default', gulp.series('build', 'watch'));
