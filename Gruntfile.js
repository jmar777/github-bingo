module.exports = function(grunt) {

	grunt.initConfig({
		concat: {
			scripts: {
				options: {
					separator: ';'
				},
				src: [
					'public/src/js/jquery-1.10.2.min.js'
				],
				dest: 'public/dist/js/gh-bingo.js'
			}
		},
		uglify: {
			options: {
				banner: '/*! gh-bingo.min.js <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			dist: {
				files: {
					'public/dist/js/gh-bingo.min.js': ['<%= concat.scripts.dest %>']
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['concat', 'uglify']);
	
};