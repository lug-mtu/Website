module.exports = function(grunt) {

  // Project config.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Dev tasks.
    connect: {
      server: {
        livereload: {
          livereload: true,
          port: 8000,
          //hostname: "localhost",
          base: "./"
        }
      }
    },

    watch: {
      options: {
        livereload: true
      }
    },

    // Normal tasks.
    concat: {
      js: {
        src: [ "js/vendor/jquery.js", "js/vendor/fastclick.js", "js/vendor/modernizr.js",  "js/foundation.min.js" ],
        dest: "js/global.js",
      },
      css: {
        src: [ "css/foundation.css" ],
        dest: "css/global.css",
      }
    }

  });

  // Load plugins (dev purposes).
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Load plugins.
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Register tasks (default).
  grunt.registerTask('default', ['concat']);

  // Register tasks (dev purposes).
  grunt.registerTask('dev', ['connect', 'watch']);

};