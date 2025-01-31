const { exec, execSync, execFile, spawn, fork } = require('child_process');
const path = require('path');

// 执行命令
exec(
  'node -v',
  {
    cwd: './03.常见内置模块/child_process', // 指定子进程工作目录
    // env: { //环境变量键值对
    //   NODE_ENV: 'development',
    // },
    env: process.env,
    timeout: 1000, // 指定超时时间  默认 0 不超时
    maxBuffer: 1024 * 1024, // 指定最大缓冲区 stdout 或 stderr 允许的最大字节数。 默认为 200*1024。 如果超过限制，则子进程会被终止。 查看警告： maxBuffer and Unicode。
    killSignal: 'SIGKILL', // 指定杀死信号 默认 SIGTERM
    stdio: 'pipe', // 指定标准输入输出
    shell: true, // 指定使用shell
    encoding: 'utf-8', // 指定编码
  },
  (err, stdout, stderr) => {
    if (err) {
      console.log(err);
    }
    console.log(stdout.toString());
    console.log(stderr);
  }
);

// 同步执行命令
// const result = execSync('node -v');
// console.log(result.toString());

// execSync("open /Applications/Google\ Chrome.app")

// execFile 适合执行可执行文件，例如执行一个node脚本，或者shell文件，windows可以编写cmd脚本，posix，可以编写sh脚本
// execFile(path.resolve(__dirname, './bat.cmd'), null, (err, stdout) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(stdout.toString());
// });

// exec是底层通过execFile实现 execFile底层通过spawn实现
// 流式处理，适合大量数据和长时间运行的进程
// spawn 会返回一个带有标准输入输出流(stdin, stdout, stderr)的子进程实例
//                     命令      参数  options配置
// const child = spawn('netstat', ['-an'], {});
// 处理数据流
// child.stdout.on('data', (data) => {
//   console.log(`输出: ${data}`);
// });

// 处理错误
// child.stderr.on('data', (data) => {
//   console.error(`错误: ${data}`);
// });

// 创建子进程
// 建立了父子进程之间的 IPC (进程间通信) 通道
// 场景适合大量的计算，或者容易阻塞主进程操作的一些代码，就适合开发fork
const child = fork(path.resolve(__dirname, './worker.js'), [], {
  // cwd: process.cwd(),      // 工作目录
  // env: process.env,        // 环境变量
  // encoding: 'utf8',        // 编码
  // silent: false,           // 是否共享父进程的标准输入输出
});

// 监听子进程的消息
child.on('message', (data) => {
  console.log('父进程接受消息：', data);
});

// 发送消息
child.send('我是父进程');

// 监听子进程的退出
child.on('exit', (code) => {
  console.log(`子进程退出，退出码: ${code}`);
});
