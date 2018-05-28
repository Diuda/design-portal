var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var war = require('gulp-war')
var zip = require('gulp-zip')

gulp.task('start', function() {

});

function noderun() {
    nodemon({
        script: './bin./www',
        env: {'NODE_ENV': 'development'}
    })  
}


gulp.task('buildWar', () => {
    return new Promise((resolve, reject)=>{
        gulp.src(["*.js", "bin/*", "package.json", "controller", "models", "routes"])
        .pipe(war({
            welcome: 'index.html',
            displayName: "Gulp war"
        }))
        .pipe(zip('myapp.war'))
        .pipe(gulp.dest("./dist"));
        resolve();
    })

})