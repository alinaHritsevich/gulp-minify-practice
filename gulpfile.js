// Задача для копіювання HTML
exports.copyHTML = async () => {
    return gulp.src('app/*.html')
      .pipe(gulp.dest('public'));
  }
  
  // Задача для копіювання JS
  exports.copyJS = async () => {
    return gulp.src('app/*.js')
      .pipe(gulp.dest('public'));
  }