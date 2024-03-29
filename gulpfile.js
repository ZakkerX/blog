/* eslint-disable node/no-unpublished-require */
const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const plumber = require('gulp-plumber');
/* eslint-enable node/no-unpublished-require */

gulp.task('sass', () => {
	return gulp
		.src('dev/sass/**/*.sass')
		.pipe(plumber())
		.pipe(sass())
		.pipe(
			autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {
				cascade: true
			})
		)
		.pipe(cssnano())
		.pipe(gulp.dest('public/stylesheets'));
});

gulp.task('default', ['sass'], () => {
	gulp.watch('dev/sass/**/*.sass', ['sass']);
});