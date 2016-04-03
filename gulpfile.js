'use strict';

const atRoot = require('postcss-atroot');
const babel = require('gulp-babel');
const browserify = require('browserify');
const browserSync = require('browser-sync').create();
const clearFix = require('postcss-clearfix');
const colorShort = require('postcss-color-short');
const cssMqpacker = require('css-mqpacker');
const cssNano = require('cssnano');
const cssNext = require('postcss-cssnext');
const cssSorter = require('css-declaration-sorter');
const focus = require('postcss-focus');
const gulp = require('gulp');
const gutil = require('gulp-util');
const inlineImg = require('postcss-inline-image');
const postcss = require('gulp-postcss');
const pug = require('gulp-pug');
const px2Rem = require('postcss-pxtorem');
const reactify = require('reactify');
const size = require('postcss-size');
const source = require('vinyl-source-stream');
const uglify = require('gulp-uglify');
const watch = require('gulp-watch');

gulp.task('default', ['server'], () => {
  gulp.watch('src/pug/**', (event) => {
    gulp.run('pug');
  });
  gulp.watch('src/postcss/**', (event) => {
    gulp.run('postcss');
  });
  gulp.watch('src/css/**', (event) => {
    gulp.run('css');
  });
  gulp.watch('src/jsx/**', (event) => {
    gulp.run('jsx');
  });
  gulp.watch('src/js/**', (event) => {
    gulp.run('js');
  });
});

// Pug

gulp.task('pug', () => {
  gulp.src('src/pug/**/*.pug')
  .pipe(pug({
    pretty: false,
  }))
  .pipe(gulp.dest('./dist/'))
  .pipe(browserSync.stream());
});

// PostCSS

gulp.task('postcss', () => {
  const processors = [
    atRoot,
    colorShort,
    focus,
    size,
    inlineImg,
    clearFix,
    px2Rem,
    cssNext({
      autoprefixer: 'ie >= 7, last 10 versions, > 1%'
    }),
    cssMqpacker,
    cssSorter,
    cssNano
  ];
  gulp.src('src/postcss/*.css')
  .pipe(postcss(processors))
  .pipe(gulp.dest('./dist/css/'))
  .pipe(browserSync.stream());
});

// JavaScript

gulp.task('jsx', () => {
  var bundler = browserify({
    entries: ['./src/jsx/app.jsx'],
    transform: [reactify],
    extensions: ['.jsx'],
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: true
  });

  function build(file) {
    if (file) gutil.log('Recompiling ' + file);
    return bundler
      .bundle()
      .on('error', gutil.log.bind(gutil, 'Browserify Error'))
      .pipe(source('main.js'))
      .pipe(gulp.dest('./src/js/'));
  };
  build();
  bundler.on('update', build);
});

gulp.task('js', () => {
  gulp.src('src/js/main.js')
  .pipe(babel())
  .pipe(uglify())
  .pipe(gulp.dest('dist/js'))
  .pipe(browserSync.stream());
});

// Server

gulp.task('server', () => {
  browserSync.init({
    server: {
      baseDir: './dist/'
    },
    open: false
  });
});
