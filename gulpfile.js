

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    autoprefixer = require('autoprefixer'),
    babel = require('gulp-babel'),
    // bs = require('browser-sync').create(),
    cleancss = require('gulp-clean-css'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    stylus = require('gulp-stylus'),
    uglify = require('gulp-uglify'),
    //webpack = require('webpack'),
    webpack = require('gulp-webpack'),
    webpackConfig = require('./webpack.config.js'),
    postcss = require('gulp-postcss'),
    minifyCSS = require('gulp-minify-css'),
    connect = require('gulp-connect'),
    flexibility = require('postcss-flexibility');


/* Directories */
var dirs = {
    src: './assets',
    dest: './dist'

};




gulp.task('connect', function() {
    connect.server({
        root: '.',
        livereload: true,
        port: 80
    });
});







gulp.task('styles-scss', function () {
    return gulp.src([
        dirs.src + '/scss/app.scss',

    ])

        .pipe(sass({
            includePaths: ['node_modules', 'assets']
        }))

        .pipe(concat('app.min.css'))
        .pipe(cleancss())
        .pipe(gulp.dest(dirs.dest + '/css'));
});


gulp.task('images', function () {
    return gulp.src([
        dirs.src + '/img/**/*.*',

    ])
    .pipe(gulp.dest(dirs.dest + '/img/'));
});

gulp.task('jQuery', function () {
    return gulp.src([
        'node_modules/jquery/dist/jquery.js',

    ])
    .pipe(gulp.dest(dirs.dest + '/js/'));
});

gulp.task('fonts', function () {
    return gulp.src([
        dirs.src + '/fonts/**/*.*',

    ])
    .pipe(gulp.dest(dirs.dest + '/fonts/'));
});



// Scripts App
gulp.task('scripts-app', function () {
    return gulp.src([
        // Project scripts
        dirs.src + '/js/app.js',
    ])
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest(dirs.dest + '/js'));
});



/*------------*/
/* Watch Task */
/*------------*/

gulp.task('watch', function () {
    gulp.watch(dirs.src + '/scss/**/*.scss', gulp.series('styles-scss'));
    gulp.watch(dirs.src + '/js/**/*.js', gulp.series('scripts-app'));
    gulp.watch(dirs.src + '/img/**/*.*', gulp.series('images'));
    gulp.watch(dirs.src + '/fonts/**/*.*', gulp.series('fonts'));
});


/*------------*/
/* Build task */
/*------------*/
gulp.task('build', gulp.series('styles-scss', 'scripts-app', 'images', 'fonts', 'jQuery'));


// gulp.task('default', gulp.series('connect', 'watch') , function () {
//
// });