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


//styles
gulp.task('styles', function() {
	return gulp.src(['app/styles/*.scss'])
		.pipe(compass({
			// project: 'dist/assets',
			css: 'dist/assets/css',
			sass: 'app/styles/',
			image: 'dist/assets/i'
			// font: 'dist/assets/fonts'
		}))
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
		.pipe(gulp.dest('dist/assets/css'))
		.pipe(rename({ suffix: '.min' }))
		.pipe(cleancss({
          compatibility: 'ie8'
        }))
		.pipe(gulp.dest('dist/assets/css'))
		.pipe(livereload());
});

//scripts
gulp.task('scripts', function() {
	return gulp.src(['app/scripts/plugins/*.js', 'app/scripts/app.js'])
		.pipe(concat('main.js'))
		.pipe(gulp.dest('dist/assets/js'))
		.pipe(rename({ suffix: '.min' }))
		.pipe(uglify())
		.pipe(gulp.dest('dist/assets/js'))
		.pipe(livereload());
});

//templates
gulp.task('templates', function() {
  return gulp.src('app/pages/*.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('dist/'))
});


//svg and png sprites
gulp.task('svgSprite', function () {

  var basic = gulp.src('app/spritesrc/basic/*.svg')
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
                        "dest": "../../../app/styles/utilities/sprite.scss",
                        "template": "app/styles/templates/sprite-template.scss"
                    }
                }
            }
        }
    }))
    .pipe(gulp.dest('dist/assets/i'));


    var browsers = gulp.src('app/spritesrc/browsers/*.svg')
    .pipe(image())
    .pipe(svgSprite({
        "mode": {
            "css": {
                "spacing": {
                    "padding": 2
                },
                "dest": "./",
                "layout": "vertical",
                "sprite": "sprite_browsers.svg",
                "bust": false,
                "render": {
                    "scss": {
                        "dest": "../../../app/styles/utilities/spriteBrowsers.scss",
                        "template": "app/styles/templates/sprite-browsers-template.scss"
                    }
                }
            }
        }
    }))
    .pipe(gulp.dest('dist/assets/i'));


  return merge(basic, browsers);

});



gulp.task('pngSprite', ['svgSprite'], function() {
    var basic = gulp.src('dist/assets/i/sprite.svg')
        .pipe(svg2png())
        .pipe(image())
        .pipe(gulp.dest('dist/assets/i'));

    var browsers = gulp.src('dist/assets/i/sprite_browsers.svg')
        .pipe(svg2png())
        .pipe(image())
        .pipe(gulp.dest('dist/assets/i'));

  return merge(basic, browsers);
});

gulp.task('sprite', ['pngSprite']);




// Generate different formats for Fonts
gulp.task('fonts', function(){
  gulp.src(['dist/assets/fonts/*.ttf'])
    .pipe(ttf2eot())
    .pipe(gulp.dest('dist/assets/fonts/'));

  gulp.src(['dist/assets/fonts/*.ttf'])
    .pipe(ttf2woff())
    .pipe(gulp.dest('dist/assets/fonts/'));
});


// Watch
gulp.task('live', function() {
	livereload.listen();

	//watch .scss files
	gulp.watch(['app/styles/utilities/*.scss', 'app/styles/sections/*.scss', 'app/styles/pages/*.scss', 'app/styles/plugins/*.scss', 'app/styles/robonomics.scss'], ['styles']);

	//watch .js files
	gulp.watch('app/scripts/**/*.js', ['scripts']);

	//watch .jade files
	gulp.watch('app/pages/**/*.pug', ['templates']);


	//svg and png sprites
	gulp.watch(['app/spritesrc/basic/*.svg', 'app/spritesrc/browsers/*.svg'], ['sprite']);

	//font generate if ttf changes
	gulp.watch('dist/assets/fonts/*.ttf', ['fonts']);
});


//default
gulp.task('default', ['scripts', 'styles', 'templates', 'sprite', 'fonts', 'live']);
