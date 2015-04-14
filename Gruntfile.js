module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		/*sass: {
			options: {
				includePaths: ['bower_components/foundation/scss']
			},
			dist: {
				options: {
					outputStyle: 'compressed',
					sourceMap: true,
				},
				files: {
					'css/app.css': 'scss/app.scss'
				}
			}
		},

		autoprefixer: {
			dist: {
				files: {
					'css/app.css': 'css/app.css'
				}
			}
		},*/

		shell: {
			jekyllBuild : {
				command : 'jekyll build'
			},
			jekyllServe : {
				command : 'jekyll serve'
			}
		},

		watch: {
			site: {
				files: ['index.html', '_layouts/*.html', '_posts/*.md', '_includes/*.html'],
				tasts: ['shell:jekyllBuild']
			},
			sass: {
				files: 'scss/**/*.scss',
				//tasks: ['sass', 'autoprefixer', 'shell:jekyllBuild']
				tasks: ['shell:jekyllBuild']
			},
			grunt: {
				files: ['Gruntfile.js'],
				options: {
					reload: true
				}
			}
		}
	});

	//grunt.loadNpmTasks('grunt-sass');
	//grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-shell');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('serve', ['shell:jekyllServe']);
	grunt.registerTask('build', ['shell:jekyllBuild']);
	grunt.registerTask('default', ['build', 'watch']);
}
