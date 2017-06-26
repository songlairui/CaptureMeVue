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
  gulp.watch(['src/**/*.vue', 'src/*.vue', 'scripts/**/*.js'],
    function() {
      console.info(`Start : ${new Date().toLocaleString()}`)
      webpack(config, function(err, stats) {
        if (err) {
          console.error(err)
        } else {
          console.info(`Ended : ${new Date(stats.endTime).toLocaleString()}`)
        }
      })
    }
  )
})