'use strict';

const babel = require('gulp-babel');
const babelify = require("babelify");
const browserify = require('browserify');
const browserSync = require('browser-sync').create();
const buffer = require('vinyl-buffer');
const clearFix = require('postcss-clearfix');
const colorShort = require('postcss-color-short');
const cssMqpacker = require('css-mqpacker');
const cssNano = require('cssnano');
const cssNext = require('postcss-cssnext');
const cssSorter = require('css-declaration-sorter');
const focus = require('postcss-focus');
const gulp = require('gulp');
const gutil = require('gulp-util');
const imageOp = require('gulp-image-optimization');
const inlineImg = require('postcss-inline-image');
const nested = require('postcss-nested');
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
  gulp.watch('src/js/**', (event) => {
    gulp.run('js');
  });
});

gulp.task('build', () => {
  gulp.run('pug', 'postcss', 'js', 'images', 'move');
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
    nested,
    colorShort,
    focus,
    size,
    inlineImg,
    clearFix,
    px2Rem,
    cssNext({
      autoprefixer: ['ie >= 7', 'last 10 versions', '> 1%']
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

gulp.task('js', () => {
  var bundler = browserify({
    entries: ['./src/js/App.js'],
    transform: [babelify, reactify],
    extensions: ['.js'],
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
      .pipe(buffer())
  };
  build()
  .pipe(uglify())
  .pipe(gulp.dest('./dist/js/'))
  .pipe(browserSync.stream())
  bundler.on('update', build);
});

// Images

gulp.task('images', (cb) => {
  gulp.src(['src/images/**/*'])
  .pipe(imageOp({
    optimizationLevel: 5,
    progressive: true,
    interlaced: true
  }))
  .pipe(gulp.dest('dist/images')).on('end', cb).on('error', cb);
});

// Moving

gulp.task('move', () => {
  const filesToMove = [
    './src/fonts/**/*.*',
    './src/favicon.ico'
  ];
  gulp.src(filesToMove, { base: './src/' })
  .pipe(gulp.dest('./dist/'));
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
