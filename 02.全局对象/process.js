// console.log(process);
// process对象提供了关于当前Node.js进程的信息和控制

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

console.log(process.argv0); //argv[0]的原始值
