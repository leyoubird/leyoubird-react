module.exports = function(grunt) {

  var webpack = require("webpack");

  // 处理函数
  var makeBuild = function () {
    grunt.file.recurse('./src/pages/', function (abspath, rootdir, subdir, filename) {
      console.log(abspath + ' | ' + rootdir + ' | ' + subdir + ' | ' + filename);
    });
  }

  // webpack配置
  var webpackConfig = require('./webpack.config.js');

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // webpack配置文件
    webpack: {
      options: webpackConfig,
      build: {
        plugins: webpackConfig.plugins.concat(
          new webpack.DefinePlugin({
            "process.env": {
              // This has effect on the react lib size
              "NODE_ENV": JSON.stringify("production")
            }
          }),
          new webpack.optimize.DedupePlugin(),
          new webpack.optimize.UglifyJsPlugin()
        )
      },
      'build-src': {
        devtool: "sourcemap",
        debug: true
      }
    },
    "webpack-dev-server": {
      options: {
        webpack: webpackConfig
      },
      start: {
        inline: true,
        keepAlive: true,
        webpack: {
          devtool: "source-map",
          debug: true
        }
      }
    }
  });

  // 加载各项任务的插件。
  grunt.loadNpmTasks('grunt-webpack');

  // 任务列表
  grunt.registerTask('default', 'Say Hello', function() {
    grunt.log.write('Hello! This is gruntfile, where your task begins ').ok();
    makeBuild();
  });

  grunt.registerTask('build', '构建模式', function() {
    grunt.log.write('启动构建模式');
    grunt.task.run('webpack:build');
  });

  grunt.registerTask('build-src', '构建-源码模式', function () {
    grunt.log.write('启动构建-源码模式');
    grunt.task.run('webpack:build-src');
  });

  grunt.registerTask('dev', '开发模式', function () {
    grunt.log.write('启动开发模式');
    grunt.log.write('开发模式将会启动webpack dev server');
    grunt.task.run('webpack-dev-server:start');
  })


};