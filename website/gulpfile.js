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

    iconfont         = require('gulp-iconfont')
    browserSync      = require('browser-sync');


var path = {

    file:{
        csscompile: 'app/css/compile.scss',
        cssall: 'app/css/**/*.scss',
        jsall: 'app/js/**/*.js',
        layoutscompile: 'app/layouts/*.pug',
        layoutsall: 'app/layouts/**/*.pug',
        fonticons: 'app/fonticons/*.svg'
    },

    folder:{
        css: 'dist/assets/css/',
        fonts: 'dist/assets/fonts/',
        sass: 'app/css/',
        image: 'dist/assets/i/',
        js: 'dist/assets/js/',
        layouts: 'dist/',
        csstemplates: 'app/css/templates/',
        sprites: 'app/sprite/'
    },

    filename:{
        css: 'website',
        js: 'website.js',
        fonticons: 'iconfont'
    }

}


gulp.task('css', function() {
    return gulp.src([path.file.csscompile])
        .pipe(compass({
            css: path.folder.css,
            sass: path.folder.sass,
            image: path.folder.image,
            font: path.folder.fonts
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
        // .pipe(uglify())
        .pipe(gulp.dest(path.folder.js))
        .pipe(browserSync.reload({stream:true}));
});


gulp.task('layouts', function() {
  return gulp.src([path.file.layoutscompile])
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest(path.folder.layouts))
    .pipe(browserSync.reload({stream:true}));
});



gulp.task('iconfont', function(){
    return gulp.src([path.file.fonticons])
    .pipe(iconfont({
      fontName: path.filename.fonticons, // required
      formats: ['ttf', 'eot', 'woff'],
      normalize: true,
      fontHeight: 1000,
      prependUnicode: true
     }))
    .pipe(gulp.dest(path.folder.fonts))
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

  return merge(basic);

});

gulp.task('pngSprite', ['svgSprite'], function() {
    var basic = gulp.src(path.folder.image + '/sprite.svg')
        .pipe(svg2png())
        .pipe(image())
        .pipe(gulp.dest(path.folder.image))
        .pipe(browserSync.reload({stream:true}));

  return merge(basic);
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

    // font icons
    gulp.watch(path.file.fonticons, ['iconfont']);

    // //svg and png sprites
    gulp.watch([path.folder.sprites + '/basic/*.svg'], ['sprite']);

});


//default
gulp.task('default', ['css', 'js', 'layouts', 'iconfont', 'sprite', 'watch', 'browserSync' ]);
