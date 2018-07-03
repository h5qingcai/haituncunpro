  // 引入模块

  const gulp = require("gulp"),
        connect = require("gulp-connect"),
        sass = require("gulp-sass");
  //服务器
gulp.task("connect",function(){
         connect.server({
                     root:"src"
         });
 // 定制任务：编译sass 
});
gulp.task("sass-task", function(){
	gulp.src("src/sass/*.scss")
		.pipe(sass({outputStyle: "expanded"}))
		.pipe(gulp.dest("src/css"));
});
// 监视
gulp.task("watch",function(){

    gulp.watch("src/sass/*.scss", ["sass-task"]);


});
 