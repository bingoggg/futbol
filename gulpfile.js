// Подключаем Gulp и все необходимые библиотеки
var gulp           = require('gulp'),
		gutil          = require('gulp-util' ),
		sass           = require('gulp-sass'),
		browserSync    = require('browser-sync'),
		cleanCSS       = require('gulp-clean-css'),
		autoprefixer   = require('gulp-autoprefixer'),
		bourbon        = require('node-bourbon'),
		ftp            = require('vinyl-ftp');

// Обновление страниц сайта на локальном сервере
gulp.task('browser-sync', function() {
	browserSync({
		proxy: "Futbol.com",
		notify: false
	});
});

// Компиляция stylesheet.css
gulp.task('sass', function() {
	return gulp.src('catalog/sass/stylesheet.sass')
		.pipe(sass({
			includePaths: bourbon.includePaths
		}).on('error', sass.logError))
		.pipe(autoprefixer(['last 15 versions']))
		.pipe(cleanCSS())
		.pipe(gulp.dest('catalog/css/'))
		.pipe(browserSync.reload({stream: true}))
});

// Наблюдение за файлами
gulp.task('watch', ['sass', 'browser-sync'], function() {
	gulp.watch('catalog/sass/stylesheet.sass', ['sass']);
    gulp.watch('catalog/sass/*.sass', ['sass']);
    gulp.watch('catalog/js/**/*.js', browserSync.reload);
	gulp.watch('catalog/plugins/**/*', browserSync.reload);
});

// Выгрузка изменений на хостинг
/*
gulp.task('deploy', function() {
	var conn = ftp.create({
		host:      'hostname.com',
		user:      'username',
		password:  'userpassword',
		parallel:  10,
		log: gutil.log
	});
	var globs = [
	'catalog/view/theme/apple/**'
	];
	return gulp.src(globs, {buffer: false})
	.pipe(conn.dest('/path/to/folder/on/server'));
});
*/
gulp.task('default', ['watch']);