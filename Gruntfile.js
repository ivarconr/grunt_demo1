module.exports = function(grunt) {
  var buildName = grunt.option("buildName") || "build";

  // Project configuration.
  grunt.initConfig({
    concat: {
      js: {
        src: ['js/*.js'],
        dest: 'dist/js/concat.js'
      },
      css: {
        src: 'css/*.css',
        dest: 'dist/css/concat.css'
      }
    },
    uglify: {
      build: {
        src: 'dist/js/concat.js',
        dest: 'dist/js/'+ buildName +'.min.js'
      }
    },
    cssmin: {
      css:{
        src: 'dist/css/concat.css',
        dest: 'dist/css/'+ buildName +'.min.css'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task(s).
  grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);
};
