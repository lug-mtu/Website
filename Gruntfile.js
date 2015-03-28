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
        livereload: true,
      },


      js: {
        files: [ 'js/*.js', 'js/**/*.js' ],
        tasks: [ 'concat', 'uglify' ],
        options: {
          spawn: false,
        },
        /*livereload: {
          livereload: true,
          files: [ 'js/global.min.js' ],
        }*/
      },

      css: {
        files: [ 'css/*.scss' ],
        tasks: [ 'sass', 'autoprefixer', 'cssmin' ],
        options: {
          spawn: false,
        },
        /*livereload: {
          livereload: true,
          files: [ 'css/global.min.css' ],
        }*/
      },

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
          style: "extended"
        },
        files: {
          "css/global.css": "css/main.scss"
        }
      }
    },

    autoprefixer: {
      options: {
        browsers: [ 'last 2 versions' ]
      },
      dist: {
        files: {
          "css/global.css": "css/global.css"
        }
      }
    },

    cssmin: {
      target: {
        files: {
          'css/global.min.css': [ 'css/global.css' ]
        }
      }
    },

    uglify: {
      target: {
        files: {
          'js/global.min.js': [ 'js/global.js' ]
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
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Register tasks (default).
  grunt.registerTask('default', [ 'concat', 'sass', 'autoprefixer', 'cssmin', 'uglify' ]);

  // Register tasks (dev purposes).
  grunt.registerTask('dev', ['connect', 'watch']);

};