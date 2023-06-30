const fs = require('fs');
const fsp = require('fs/promises'); //promise方式
const path = require('path');

const controller = new AbortController(); //终止器
const signal = controller.signal;

/*
! 读操作回调方式
*/
fs.readFile(
  //   './helloworld.txt', //相对路径时，是相对于node命令执行时的目录
  path.resolve(__dirname, './helloworld.txt'), //使用绝对路径时，则不用关心node命令执行时的目录
  //   第二个参数可以省略
  {
    flag: 'r', // File system flags
    encoding: 'utf-8', // 编码
    signal: signal, // 终止器
  },
  (err, data) => {
    if (err) {
      throw err;
    }
    console.log('1.data =>', data);
  }
);
//可以调用该方法终止正在执行的文件读取，callback会被调用并携带错误传递给err参数
// controller.abort();

/*
! 同步方式
*/
let buf = fs.readFileSync(path.resolve(__dirname, './helloworld.txt')); // 如果没有 encoding，返回的文件内容为 Buffer，如果有则按照传入的编码解析
console.log('2.buf =>', buf);
let data = fs.readFileSync(path.resolve(__dirname, './helloworld.txt'), 'utf-8');
console.log('2.data =>', data);

/*
! 异步方式
*/
async function readFilePromise() {
  fsp.readFile(path.resolve(__dirname, './helloworld.txt')).then((buf) => {
    console.log('3.buf =>', buf);
  });

  let data = await fsp.readFile(path.resolve(__dirname, './helloworld.txt'), 'utf-8');
  console.log('3.data =>', data);
}

readFilePromise();
