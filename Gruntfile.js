module.exports = function(grunt) {

  var webpack = require("webpack");
  var HtmlWebpackPlugin = require('html-webpack-plugin')

  // 处理函数
  var makeEntry = function (type, root) {
    root = root || './src/pages/';
    var rootList = {};
    var buildDir = {};
    grunt.file.recurse(root, function (abspath, rootdir, subdir, filename) {
      if (subdir && subdir.indexOf('/') < 0) {
        if (!rootList[subdir]) {
          rootList[subdir] = 1;
        }
      }
    });
    for (item in rootList) {
      buildDir['build/' + item + '/index'] = root + item + '/index.js';
    }
    return buildDir;
  }

  // webpack配置
  var webpackConfig = require('./webpack.config.js');

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      html: {
        expand: true,
        src: '**/index.html',
        cwd: 'src/pages/',
        dest: 'build/'
      }
    },
    clean: {
      build: ['build/*']
    },

    // webpack配置文件
    webpack: {
      options: webpackConfig,
      build: {
        entry: makeEntry(),
        plugins: webpackConfig.plugins.concat(
          new webpack.DefinePlugin({
            "process.env": {
              "NODE_ENV": JSON.stringify("production")
            }
          }),
          new webpack.optimize.DedupePlugin(),
          new webpack.optimize.UglifyJsPlugin()
        )
      },
      'build-src': {
        entry: makeEntry(),
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
        port: 8080,
        contentBase: "./build/",
        colors: true,
        webpack: {
          entry: makeEntry(),
          devtool: "source-map",
          debug: true
        }
      }
    }
  });

  // 加载各项任务的插件。
  grunt.loadNpmTasks('grunt-webpack');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // 任务列表
  grunt.registerTask('default', 'Say Hello', function() {
    grunt.log.subhead('来自Grunt前端脚手架: Hello! I m Ready');
    grunt.log.writeln(' ');
    grunt.log.writeln('您有下列命令可以使用：');
    grunt.log.writeln('  grunt build      构建完整的前端项目。可直接部署至服务器。');
    grunt.log.writeln('  grunt build-src  构建前端源码项目，用于本地调试或者预发布。');
    grunt.log.writeln('  grunt dev        开发模式，启动webpack-dev-server，用于日常开发和调试场景');
    grunt.log.writeln(' ');
    grunt.log.writeln('注意：使用grunt dev后的build文件夹不能用于直接部署服务器，您需要重新执行grunt build')
  });

  grunt.registerTask('build', '构建模式', function() {
    grunt.log.write('启动构建模式');
    grunt.task.run(['clean:build', 'copy:html', 'webpack:build']);
  });

  grunt.registerTask('build-src', '构建-源码模式', function () {
    grunt.log.write('启动构建-源码模式');
    grunt.task.run(['clean:build', 'copy:html', 'webpack:build-src']);
  });

  grunt.registerTask('dev', '开发模式', function () {
    grunt.log.write('启动开发模式');
    grunt.log.write('开发模式将会启动webpack dev server');
    grunt.task.run(['copy:html', 'webpack-dev-server:start']);
  })


};