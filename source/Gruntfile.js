/*
//  After you have changed the settings at "Your code goes here",
//  run this with one of these options:
//   "grunt" alone creates a new, completed images directory
//   "grunt clean" removes the images directory
//   "grunt responsive_images" re-processes images without removing the old ones
// */

module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'gm',  /* do not use im , imagegraphic has some bugs and does not work*/
          sizes: [
          {
            width: 400,
            suffix: '_small',
            quality: 90
          },
          ]
        },

        /*
        You don't need to change this part if you don't change
        the directory structure.
        */
        files: [{
          expand: true,
          src: ['*.jpg'],
          cwd: 'img/',
          dest: 'images/'
        }]
      }
    },
    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['images']
        },
      },
    },

  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['clean', 'mkdir', 'copy', 'responsive_images']);

};
