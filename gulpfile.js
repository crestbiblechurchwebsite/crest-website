const gulp = require('gulp')
const nunjucksRender = require('gulp-nunjucks-render')
const postcss = require('gulp-postcss')
const del = require('del')
const browserSync = require('browser-sync').create()

gulp.task('css', function () {
  return gulp.src('src/styles.css')
    .pipe(postcss([
      require('tailwindcss'),
      require('autoprefixer'),
    ]))
    .pipe(gulp.dest('dist'))
})

gulp.task('render', function () {
  return gulp.src('src/pages/**/*.njk').pipe(nunjucksRender({
    path: ['src/templates']
  }))
  .pipe(gulp.dest('dist'))
})

gulp.task('images', function () {
  return gulp.src('src/images/**/*').pipe(gulp.dest('dist/images'))
})

gulp.task('fonts', function () {
  return gulp.src('src/fonts/**/*').pipe(gulp.dest('dist/fonts'))
})

gulp.task('js', function () {
  return gulp.src('src/alpine.min.js').pipe(gulp.dest('dist'))
})

gulp.task('clean', function () {
  return del('dist')
})

gulp.task('server', function() {
  browserSync.init({
    server: 'dist'
  })
  gulp.watch('src/images/*', gulp.series('images'))
  gulp.watch('src/fonts/*', gulp.series('fonts'))
  gulp.watch('src/scripts.js', gulp.series('js'))
  gulp.watch(['src/**/*', 'tailwind.config.js'], gulp.series('css', 'render'))
  gulp.watch('dist/**/*').on('change', browserSync.reload)
})

gulp.task('default', gulp.series('clean', 'css', 'render', 'images', 'fonts', 'js'))

gulp.task('dev', gulp.series('default', 'server'))
