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
    // inlineImages     = require('gulp-inline-images');


var path = {

    app:{
        app: 'app',
        css: 'app/css',
        js: 'app/js',
        sprites: 'app/sprite',
        templates: '../modules/css/templates'
    },

    dist:{
        dist: 'dist',
        css: 'dist/assets/css',
        js: 'dist/assets/js',
        img: 'dist/assets/i'
    }
};

var file = {

    path:{
        css: ['app/css/*.scss', 'app/css/*/*.scss'],
        compilecss: 'app/css/compile.scss',
        js: ['../modules/js/*.js', '../modules/js/*/*.js'],
        layouts: ['app/layouts/*.pug', 'app/layouts/*/*.pug']
    },
    name:{
        css: 'robonomics_website',
        js: 'robonomics_plugins.js'
    }
};



gulp.task('styles', function() {
	return gulp.src(file.path.compilecss)
		.pipe(compass({
			css: path.dist.css,
			sass: path.app.css,
			image: path.dist.img
		}))
		.pipe(rename({
            basename: file.name.css
        }))
        .pipe(gulp.dest(path.dist.css))
        .pipe(cleancss({
          compatibility: 'ie8'
        }))
		.pipe(rename({
            basename: file.name.css,
            suffix: '.min'
        }))
		.pipe(gulp.dest(path.dist.css))
		.pipe(livereload());
});



gulp.task('scripts', function() {
	return gulp.src(file.path.js)
		.pipe(concat(file.name.js))
		.pipe(gulp.dest(path.dist.js))
		.pipe(rename({ suffix: '.min' }))
		.pipe(uglify())
		.pipe(gulp.dest(path.dist.js))
		.pipe(livereload());
});


gulp.task('templates', function() {
  return gulp.src(file.path.layouts)
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest(path.dist.dist))
    // .pipe(inlineImages({
    //     attribute: 'inline',
    //     basedir: 'app/inline-images'
    // }))
    .pipe(livereload());
});


// //svg and png sprites
gulp.task('svgSprite', function () {

  var basic = gulp.src(path.app.sprites + '/basic/*.svg')
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
                        "template": path.app.templates + "/sprite-template.scss"
                    }
                }
            }
        }
    }))
    .pipe(gulp.dest(path.dist.img));


    var browsers = gulp.src(path.app.sprites + '/browsers/*.svg')
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
                        "template": path.app.templates + "/sprite-browsers-template.scss"
                    }
                }
            }
        }
    }))
    .pipe(gulp.dest(path.dist.img));


  return merge(basic, browsers);

});



gulp.task('pngSprite', ['svgSprite'], function() {
    var basic = gulp.src(path.dist.img + '/sprite.svg')
        .pipe(svg2png())
        .pipe(image())
        .pipe(gulp.dest(path.dist.img));

    var browsers = gulp.src(path.dist.img + '/sprite_browsers.svg')
        .pipe(svg2png())
        .pipe(image())
        .pipe(gulp.dest(path.dist.img));

  return merge(basic, browsers);
});

gulp.task('sprite', ['pngSprite']);



// gulp.task('inline-images', function(){
//     return gulp.src([path.dist.dist+'*.html'])
//     .pipe(inlineImages({
//         attribute: 'inline',
//         basedir: 'app/inline-images'
//     }))
//     .pipe(gulp.dest(path.dist.dist))
//     .pipe(livereload());
// });



// Watch
gulp.task('live', function() {
	livereload.listen();

	//watch .scss files
	gulp.watch(file.path.css, ['styles']);

	//watch .js files
	gulp.watch(file.path.js, ['scripts']);

	// //watch .jade files
	gulp.watch(file.path.layouts, ['templates']);


	// //svg and png sprites
	gulp.watch([path.app.sprites + '/basic/*.svg', path.app.sprites + '/browsers/*.svg'], ['sprite']);

});


//default
gulp.task('default', ['styles', 'scripts', 'templates', 'sprite', 'live']);
