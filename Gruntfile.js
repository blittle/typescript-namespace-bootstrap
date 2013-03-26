/*global module:false*/
module.exports = function(grunt) {

    // Load the typescript plugin
    grunt.loadNpmTasks('grunt-typescript');

    // Project configuration.
    grunt.initConfig({
        typescript: {
            base: {
                src: ['src/**/*.ts'],
                dest: 'build',
                options: {
                    module: 'commonjs', //or commonjs
                    target: 'es5', //or es3
                    sourcemap: true,
                    declaration: true
                }
            }
        }
    });

    // Register tasks
    grunt.registerTask('default', 'typescript');

};
