// console.log(process);
// process对象提供了关于当前Node.js进程的信息和控制

const { log } = require('console');

console.log(process.execPath); //node命令的执行目录，即node.exe的所在位置，等于argv[0]
console.log(process.argv);
// node 3.全局对象/process.js one name=kfg --version

// [
//     '/Users/frank/.nvm/versions/node/v18.12.1/bin/node',          //node.exe的所在位置
//     '/Users/frank/code/mine/node-coding/02.全局对象/process.js',    //被执行的js文件的位置
//     'one',                                                        //传递的参数
//     'name=kfg',
//     '--version'
// ]

// console.log(process.argv0); //argv[0]的原始值

// console.log(process.arch); // 获取CPU架构
// console.log(process.platform); // 获取操作系统平台
// console.log(process.cwd()); // 获取当前工作目录，node命令执行时的目录

// console.log(process.memoryUsage()); // 获取内存使用情况

// process.exit(0); // 退出进程

// setTimeout(() => {
//   process.exit(0);
// }, 1000);

// setTimeout(() => {
//   console.log('进程已关闭，不会输出');
// }, 2000);

// 监听进程退出事件
// process.on('exit', () => {
//   console.log('进程已关闭');
// });

// process.pid 是当前进程的id
// console.log(process.pid);
// process.kill(process.pid, 'SIGINT'); // 杀死进程
// console.log('不会输出');

// 获取环境变量
console.log(process.env);
