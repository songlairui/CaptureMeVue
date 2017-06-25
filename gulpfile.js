var gulp = require('gulp')
  // var browserSync = require('browser-sync')
var fs = require('fs')
var webpack = require('webpack')
var config = require('./webpack.tmp.config')


gulp.task('cpfile', function() {
    return gulp.src('./extension/*').pipe(gulp.dest('/tmp/extension'))
  })
  // 打包文件到 ／tmp 文件夹
gulp.task('webpack', function() {
  webpack(config, function(err, stats) {
      console.info(err)
    })
    // gulp.watch(['*.html', 'styles/**/*.css', 'scripts/**/*.js'], )
})