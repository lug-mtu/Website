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
      }
    },

    sass: {
      dist: {
        options: {
          style: "compressed"
        },
        files: {
          "css/global.css": "css/main.scss"
        }
      }
    },

    autoprefixer: {
      options: {
        browsers: ['last 2 versions']
      },
      dist: {
        files: {
          "css/global.css": "css/global.css"
        }
      }
    }

  });

  // Load plugins (dev purposes).
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Load plugins.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');

  // Register tasks (default).
  grunt.registerTask('default', [ 'concat', 'sass', 'autoprefixer' ]);

  // Register tasks (dev purposes).
  grunt.registerTask('dev', ['connect', 'watch']);

};