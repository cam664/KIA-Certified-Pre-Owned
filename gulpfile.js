var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    sourcemaps = require('gulp-sourcemaps'),
    webserver = require('gulp-webserver'),
    server = require('gulp-server-livereload'),
    imagemin = require('gulp-imagemin'),
    prefix = require('gulp-autoprefixer');

gulp.task('scripts', function(){
    gulp.src('process/js/*.js')
    .pipe(plumber())//stops gulp from cancelling watch cmd on syntax error
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write('../maps'))
    .pipe(gulp.dest('build/js'));
});

gulp.task('styles', function(){
    gulp.src('process/scss/**/*.scss')//find all .scss files in scss folder
    .pipe(sass({
       outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(prefix({
        "browsers": ['>5%']
    }))
    .pipe(gulp.dest('build/css/'))
});

gulp.task('img', function() {
    gulp.src('process/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/img/'))
});

gulp.task('webserver', function() {
  gulp.src('build')
    .pipe(server({
      livereload: true,
      defaultFile: 'index.html',
      open: false
    }));
});

//Watch Task
gulp.task('watch', function(){
    gulp.watch('process/js/*.js', ['scripts']);//watch .js files in js folder for changes, on change run task 'scripts'
    gulp.watch('process/scss/**/*.scss', ['styles']);
    gulp.watch('process/img/**/*', ['img']);
});

gulp.task('default', ['scripts', 'styles', 'img', 'webserver', 'watch']);//default task. Run by typing 'gulp' in node terminal.
