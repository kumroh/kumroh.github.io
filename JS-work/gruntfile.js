 var taskTimer = require("grunt-timer");
 module.exports = function(grunt) {
     taskTimer.init(grunt, {
         deferLogs: true,
         friendlyTime: true,
         color: "blue"
     });

     grunt.initConfig({
         pkg: grunt.file.readJSON('package.json'),

         uglify: {
             build: {
                 src: 'build/js/jswork.concat.js',
                 dest: 'build/js/jswork.min.js'
             }
         },
         concat: {
             options: {
                 banner: "\n\t/*! pack: <%= pkg.name %>; version: <%= pkg.version %>;  \n" +
                     "time: <%= grunt.template.today('yyyy-mm-dd') %>; author: <%= pkg.author%>*/\n",
                 separator: ";\n\n"
             },
             build: {
                 src: 'js-patterns/*.js',
                 dest: 'build/js/jswork.concat.js'
             }
         },
         watch: {
             scripts: {
                 files: ['js-patterns/*.js'],
                 tasks: ['default'],
                 options: {
                     spawn: false,
                     debounceDelay: 2999
                 },
             },
         }
     });




     grunt.loadNpmTasks('grunt-contrib-watch');
     grunt.loadNpmTasks('grunt-contrib-concat');
     grunt.loadNpmTasks('grunt-contrib-uglify');

     grunt.registerTask('default', ['concat:build', 'uglify:build']);
 }