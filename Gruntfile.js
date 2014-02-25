// Generated on 2014-02-25 using generator-nodejs 1.0.3
'use strict';

module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        complexity: {
            generic: {
                src: ['app/**/*.js'],
                options: {
                    errorsOnly: false,
                    cyclometric: 6,       // default is 3
                    halstead: 16,         // default is 8
                    maintainability: 100  // default is 100
                }
            }
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: [
                'Gruntfile.js',
                'index.js',
                'app/**/*.js',
                'test/**/*.js'
            ]
        },
        mochacli: {
            all: ['test/**/*.js'],
            options: {
                reporter: 'spec',
                ui: 'tdd'
            }
        },
        watch: {
            js: {
                files: [
                    'index.js',
                    'app/**/*.js'
                ],
                tasks: ['default'],
                options: {
                    nospawn: true
                }
            }
        }
    });

    grunt.registerTask('test', [
        'complexity',
        'jshint',
        'mochacli',
        'watch'
    ]);

    grunt.registerTask('ci', [
        'complexity',
        'jshint',
        'mochacli'
    ]);

    grunt.registerTask('default', [
        'test'
    ]);
};
