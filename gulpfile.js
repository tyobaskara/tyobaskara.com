var gulp = require('gulp'),
sass = require('gulp-sass'),
postcss = require('gulp-postcss'),
sourcemaps = require('gulp-sourcemaps'),
autoprefixer = require('autoprefixer'),
concat = require('gulp-concat'),
browserSync = require('browser-sync').create(),
path = require("path"),
html = require('gulp-processhtml'),
watch = require('gulp-watch'),
runs = require('run-sequence'),
htmlmin = require('gulp-htmlmin'),
historyFallback = require('connect-history-api-fallback'),
cssnano = require('gulp-cssnano'),
webpackStream = require('webpack-stream');

var targetcss = path.join(__dirname, 'dist/assets/css');

var paths = {
    css: path.join(__dirname, 'src/scss/index.scss'),
    cssWatch: path.join(__dirname, 'src/scss/**/*.scss'),
    html: {
        src: path.join(__dirname, 'src/html/**/*.html'),
        dist: path.join(__dirname, 'dist/')
    },
    jsx: {
      src: path.join(__dirname, 'src/**/*.js'),
      dist: path.join(__dirname, 'dist/assets/js')
    }
}

// HTML task
gulp.task('html', function() {
    return gulp.src(paths.html.src)
        .pipe(html())
        .pipe(gulp.dest(paths.html.dist));
});
gulp.task('html:min', function() {
    return gulp.src(paths.html.src)
        .pipe(html())
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest(paths.html.dist));
});

// compile sass
gulp.task('sass', function() {
return gulp.src(paths.css)
    .pipe(sourcemaps.init())
    .pipe(concat('bundle.min.css'))
    .pipe(sass({ includePaths: 'node_modules/' }).on('error', sass.logError))
    .pipe(postcss([autoprefixer({ browsers: ['> 0%'] })]))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest(targetcss));
})
  
gulp.task('sass:min', function() {
return gulp.src(paths.css)
    .pipe(concat('bundle.min.css'))
    .pipe(sass({ includePaths: 'node_modules/', outputStyle: 'compressed' }))
    .pipe(postcss([autoprefixer({ browsers: ['> 0%'] })]))
    .pipe(cssnano())
    .pipe(gulp.dest(targetcss));
})

//Watcher
gulp.task('watch', function() {
    watch(paths.cssWatch, function() { runs('sass', function() {
        browserSync.reload()
      }); });
    watch(path.join(__dirname, 'src/html/**/*.html'), function() { runs('html', function() {
        browserSync.reload()
      }); });
    watch(paths.jsx.src, function() { runs('react', function() {
        browserSync.reload()
    }); });
});

// serve
gulp.task('browser', function() {
    browserSync.init({
      open: true,
      server: {
        baseDir: './dist',
        middleware: [historyFallback()]
      }
    })
  })

// compile react
gulp.task('react', function() {
    return gulp.src(paths.jsx.src)
    .pipe(
    webpackStream({
        devtool: 'cheap-module-eval-sourcemap',
        output: {
            path: path.resolve(__dirname, 'dist/assets/js'),
            filename: 'bundle.js',
            publicPath: '/dist/'
        },
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    include: path.resolve(__dirname, 'src'),
                    loader: 'babel-loader'
                },
                {
                    test: /\.(png|jpg|woff|woff2|svg|eot|gif|ttf)$/,
                    loader: 'file-loader',
                    include: path.join(__dirname, 'src')
                },
                {
                    test: /\.json$/,
                    loader: 'json-loader'
                }
            ]
        }
    })
    )
    .on('error', function() {
    this.emit('end')
    })
    .pipe(gulp.dest(paths.jsx.dist))
})
  
gulp.task('react:min', function() {
    return gulp.src(paths.jsx.src)
    .pipe(webpackStream(require('./webpack.config.js')))
    .pipe(gulp.dest(paths.jsx.dist))
})

//GULP COMMAND
// dev mode
gulp.task('default', ['html', 'sass', 'react', 'watch', 'browser']);

// prod mode - minify files
gulp.task('build', function() {
    runs('html:min', 'sass:min', 'react:min');
});