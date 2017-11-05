var gulp    = require('gulp'),     
    sass    = require('gulp-ruby-sass') ,
    notify  = require("gulp-notify") ;

var config = {
 	sassPath: './assets/styles',
 	npmDir: './node_modules/' 
};

gulp.task('css', function() { 
    return sass(config.sassPath + '/style.scss', {
             style: 'compressed',
             loadPath: [
                 './assets',
				config.npmDir + '/normalize.css',
                config.npmDir + '/bulma',
             ]
         }) 
            .on("error", notify.onError(function (error) {
                 return "Error: " + error.message;
             }))
         .pipe(gulp.dest('./')); 
});

// Rerun the task when a file changes
 gulp.task('watch', function() {
     gulp.watch(config.sassPath + '/**/*.scss', ['css']); 
});

  gulp.task('default', ['css']);