var gulp = require('gulp');
var react = require('gulp-react');
var server = require('gulp-webserver');

gulp.task('jsx', function() {
	return gulp.src('jsx/**.*')
		.pipe(react())
		.pipe(gulp.dest('dist'));
});

gulp.task('server', function() {
	return gulp.src('.')
		.pipe(server({
			livereload: true,
			open: true,
			port: 9002
		}));
});

gulp.task('default', ['server'], function() {
	gulp.watch('jsx/**/*', ['jsx']);
});