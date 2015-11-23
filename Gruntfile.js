module.exports = function(grunt) {
    grunt.initConfig({
        'bower': {
            'install': {
                'options': {
                    'targetDir': './public/js/app/vendors',
                    'cleanup':true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-bower-task');
};