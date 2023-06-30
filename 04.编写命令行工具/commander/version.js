const { program } = require('commander');

/*
* 可选的版本选项version方法用来表示程序的版本，默认的标志是 -V and --version，当出现该命令时，打印版本号并退出
*/
program.version('0.0.1');

// 执行命令 node version.js -v
// 输出：0.0.1
// console.log(program.version())

// 你也可以改变默认的标志和描述通过添加额外的参数到version方法，和option方法一样有相同的语法
// program.version('0.0.1', '-v, --vers', 'output the current version');

