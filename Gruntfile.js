/*global module:false*/
module.exports = function(grunt) {

    // Load the typescript plugin
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-jasmine');

    // Project configuration.
    grunt.initConfig({
        typescript: {
            base: {
                src: ['src/**/*.ts'],
                dest: 'build/rovor.js',
                options: {
                    declaration: true
                }
            }
        },
       jasmine: {
            customTemplate: {
                src: 'build/**/*.js',
                options: {
                    specs: 'spec/*Spec.js'
                }
            }
        }
    });

    // Register tasks
    grunt.registerTask('default', 'typescript');
    grunt.registerTask('test', ['typescript', 'jasmine']);

};
