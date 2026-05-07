const gulp = require('gulp'); // ЦЕЙ РЯДОК ОБОВ'ЯЗКОВИЙ!

// Твої старі задачі для мініфікації (вони вже там є)

// Нові задачі для копіювання:
exports.copyHTML = async () => {
 return gulp.src('app/*.html')
 .pipe(gulp.dest('public'));
}

exports.copyJS = async () => {
 return gulp.src('app/*.js')
 .pipe(gulp.dest('public'));
}
exports.default = gulp.series(exports.copyHTML, exports.copyJS);