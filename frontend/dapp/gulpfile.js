//load plugins
var gulp             = require('gulp'),
    compass          = require('gulp-compass'),
    pug              = require('gulp-pug'),
    autoprefixer     = require('gulp-autoprefixer'),
    cleancss         = require('gulp-clean-css'),
    uglify           = require('gulp-uglify'),
    merge            = require('merge-stream'),
    rename           = require('gulp-rename'),
    concat           = require('gulp-concat'),
    livereload       = require('gulp-livereload'),

    svgSprite        = require("gulp-svg-sprite"),
    svg2png          = require('gulp-svg2png'),
    image            = require('gulp-image'),
    
    ttf2eot          = require('gulp-ttf2eot'),
    ttf2woff         = require('gulp-ttf2woff');


var paths = {
    modules: '../../modules',

    app: 'app',
    app_css: 'app/css/',
    app_css_compile: 'app/css/*.scss',
    app_css_all: 'app/css/*',
    app_js: 'app/js/',
    app_js_all: '../modules/js/*.js',
    app_layouts: 'app/layouts/*.pug',

    dist: 'dist',
    dist_css: 'dist/assets/css',
    dist_css_main: 'robonomics_dapp',
    dist_js: 'dist/assets/js',
    dist_js_main: 'robonomics_plugins.js',
    dist_img: 'dist/assets/i'
};



gulp.task('styles', function() {
	return gulp.src(['app/css/compile.scss'])
		.pipe(compass({
			css: paths.dist_css,
			sass: paths.app_css,
			image: paths.dist_img
		}))
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
		.pipe(gulp.dest(paths.dist_css))
		.pipe(rename({
            basename: paths.dist_css_main,
            suffix: '.min'
        }))
		.pipe(cleancss({
          compatibility: 'ie8'
        }))
		.pipe(gulp.dest(paths.dist_css))
		.pipe(livereload());
});



gulp.task('scripts', function() {
	return gulp.src([paths.app_js_all])
		.pipe(concat(paths.dist_js_main))
		.pipe(gulp.dest(paths.dist_js))
		.pipe(rename({ suffix: '.min' }))
		.pipe(uglify())
		.pipe(gulp.dest(paths.dist_js))
		.pipe(livereload());
});


gulp.task('templates', function() {
  return gulp.src(paths.app_layouts)
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest(paths.dist))
    .pipe(livereload());
});


// //svg and png sprites
gulp.task('svgSprite', function () {

  var basic = gulp.src('app/sprite/basic/*.svg')
    .pipe(image())
    .pipe(svgSprite({
        "shape": {
            "spacing": {
                "padding": 0
            }
        },
        "mode": {
            "css": {
                "dest": "./",
                "layout": "horizontal",
                "sprite": "sprite.svg",
                "bust": false,
                "render": {
                    "scss": {
                        "dest": "../../../app/css/utilities/sprite.scss",
                        "template": "app/css/templates/sprite-template.scss"
                    }
                }
            }
        }
    }))
    .pipe(gulp.dest('dist/assets/i'));


  // return merge(basic, browsers);
  return basic;

});



gulp.task('pngSprite', ['svgSprite'], function() {
    var basic = gulp.src('dist/assets/i/sprite.svg')
        .pipe(svg2png())
        .pipe(image())
        .pipe(gulp.dest('dist/assets/i'));

  // return merge(basic, browsers);
  return basic;
});

gulp.task('sprite', ['pngSprite']);




// // Generate different formats for Fonts
// gulp.task('fonts', function(){
//   gulp.src(['dist/assets/fonts/*.ttf'])
//     .pipe(ttf2eot())
//     .pipe(gulp.dest('dist/assets/fonts/'));

//   gulp.src(['dist/assets/fonts/*.ttf'])
//     .pipe(ttf2woff())
//     .pipe(gulp.dest('dist/assets/fonts/'));
// });


// Watch
gulp.task('live', function() {
	livereload.listen();

	//watch .scss files
	gulp.watch(['app/css/utilities/*.scss', 'app/css/includes/*.scss', 'app/css/layouts/*.scss', 'app/css/templates/*.scss', 'app/styles/compile.scss'], ['styles']);

	//watch .js files
	gulp.watch(paths.app_js_all, ['scripts']);

	// //watch .jade files
	gulp.watch(paths.app_layouts, ['templates']);


	// //svg and png sprites
	gulp.watch(['app/sprite/basic/*.svg'], ['sprite']);

	// //font generate if ttf changes
	// gulp.watch('dist/assets/fonts/*.ttf', ['fonts']);
});


//default
// gulp.task('default', ['scripts', 'styles', 'templates', 'sprite', 'fonts', 'live']);
gulp.task('default', ['styles', 'scripts', 'templates', 'sprite', 'live']);
