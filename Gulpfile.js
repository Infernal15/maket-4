'use strict';

var gulp    = require('gulp');
var sass    = require('gulp-sass');
var browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');

function prefix(){
  return gulp.src('./css/style.css')
        .pipe(autoprefixer())
    .pipe(gulp.dest('style').pipe(browserSync.stream()));
}

gulp.task('prefix', prefix);

gulp.task('clean', async function(){
  del.sync('dist')
});

//---
function style() {
    //1.where is my scss
    return gulp.src('./css/scss/*.scss') //gets all files ending with .scss in src/scss
    //2. pass that file through sass compiler
    .pipe(sass().on('error',sass.logError))
    //3. where do I save the compiled css file
    .pipe(gulp.dest('./css'))
    //4. stream change to all browsers
    .pipe(browserSync.stream());
    prefix();
}
//---

gulp.task('bsync', function () {
  //spin up dev server
  browserSync.init({
    server: "./",
    hostname: "127.0.0.1",
    port: 5050,
  });

  style();

  //when css files change, reload browserSync
  gulp.watch('./css/*.css').on('change', function () {
    browserSync.reload();
  });

  gulp.watch('./index.html').on('change', function () {
    browserSync.reload();
  });

  gulp.watch('./js/main.js').on('change', function () {
    browserSync.reload();
  });

  gulp.watch('./css/scss/*.scss', style);
});

gulp.task('build', gulp.series('clean'));

gulp.task('default', gulp.series('bsync'));
