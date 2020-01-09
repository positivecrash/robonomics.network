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

    svgSprite        = require("gulp-svg-sprite"),
    svg2png          = require('gulp-svg2png'),
    image            = require('gulp-image'),
    
    ttf2eot          = require('gulp-ttf2eot'),
    ttf2woff         = require('gulp-ttf2woff'),

    browserSync      = require('browser-sync');


var path = {

    file:{
        csscompile: 'app/css/compile.scss',
        cssall: 'app/css/**/*.scss',
        jsall: 'app/js/**/*.js',
        layoutsall: 'app/layouts/**/*.pug',
    },

    folder:{
        css: 'dist/assets/css/',
        sass: 'app/css/',
        image: 'dist/assets/i/',
        sprites: 'app/sprite/',
        js: 'dist/assets/js/',
        layouts: 'dist/',
        csstemplates: 'app/css/templates/'
    },

    filename:{
        css: 'robonomics_website',
        js: 'robonomics_plugins.js'
    }

}


gulp.task('css', function() {
	return gulp.src([path.file.csscompile])
		.pipe(compass({
			css: path.folder.css,
			sass: path.folder.sass,
			image: path.folder.image
		}))
		.pipe(rename({
            basename: path.filename.css
        }))
        .pipe(gulp.dest(path.folder.css))
        .pipe(cleancss({
          compatibility: 'ie8'
        }))
		.pipe(rename({
            basename: path.filename.css,
            suffix: '.min'
        }))
		.pipe(gulp.dest(path.folder.css))
        .pipe(browserSync.reload({stream:true}));
});



gulp.task('js', function() {
	return gulp.src([path.file.jsall])
		.pipe(concat(path.filename.js))
		.pipe(gulp.dest(path.folder.js))
		.pipe(rename({ suffix: '.min' }))
		.pipe(uglify())
		.pipe(gulp.dest(path.folder.js))
        .pipe(browserSync.reload({stream:true}));
});


gulp.task('layouts', function() {
  return gulp.src([path.file.layoutsall])
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest(path.folder.layouts))
    .pipe(browserSync.reload({stream:true}));
});


// //svg and png sprites
gulp.task('svgSprite', function () {

  var basic = gulp.src(path.folder.sprites + '/basic/*.svg')
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
                        "template": path.folder.csstemplates + "/sprite-template.scss"
                    }
                }
            }
        }
    }))
    .pipe(gulp.dest(path.folder.image))
    .pipe(browserSync.reload({stream:true}));


    var browsers = gulp.src(path.folder.sprites + '/browsers/*.svg')
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
                        "dest": "../../../app/css/utilities/spriteBrowsers.scss",
                        "template": path.folder.csstemplates + "/sprite-browsers-template.scss"
                    }
                }
            }
        }
    }))
    .pipe(gulp.dest(path.folder.image))
    .pipe(browserSync.reload({stream:true}));


  return merge(basic, browsers);

});



gulp.task('pngSprite', ['svgSprite'], function() {
    var basic = gulp.src(path.folder.image + '/sprite.svg')
        .pipe(svg2png())
        .pipe(image())
        .pipe(gulp.dest(path.folder.image))
        .pipe(browserSync.reload({stream:true}));

    var browsers = gulp.src(path.folder.image + '/sprite_browsers.svg')
        .pipe(svg2png())
        .pipe(image())
        .pipe(gulp.dest(path.folder.image))
        .pipe(browserSync.reload({stream:true}));

  return merge(basic, browsers);
});

gulp.task('sprite', ['pngSprite']);

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'dist'
    },
    port: 8080,
    open: true,
    notify: false
  });
});


// Watch
gulp.task('watch', function() {

	//watch .scss files
	gulp.watch(path.file.cssall, ['css']);

	//watch .js files
	gulp.watch(path.file.jsall, ['js']);

	// //watch .pug files
	gulp.watch(path.file.layoutsall, ['layouts']);


	// //svg and png sprites
	gulp.watch([path.folder.sprites + '/basic/*.svg', path.folder.sprites + '/browsers/*.svg'], ['sprite']);

});


//default
gulp.task('default', ['css', 'js', 'layouts', 'sprite', 'watch', 'browserSync']);
