module.exports = function(grunt) {

  // Project config.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

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
    }

  });

  // Load plugins.
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Register tasks.
  grunt.registerTask('dev', ['connect', 'watch']);

};