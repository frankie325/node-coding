const os = require('os');

// console.log(os.cpus()); // 获取CPU信息
// console.log(os.platform()); // 获取操作系统平台，可能的值有：'aix', 'darwin', 'freebsd', 'linux', 'openbsd', 'sunos', 'win32'
// console.log(os.arch()); // 获取操作系统架构
// console.log(os.freemem()); // 获取空闲内存
// console.log(os.totalmem()); // 获取总内存
// console.log(os.hostname()); // 获取主机名
// console.log(os.homedir()); // 获取用户主目录
// console.log(os.tmpdir()); // 获取临时目录

// 获取当前用户信息
// console.log(os.userInfo());

// 获取系统内存信息
// console.log(os.freemem());
// console.log(os.totalmem());

// 获取系统网络信息
console.log(os.networkInterfaces());

// 获取系统路径信息
console.log(os.tmpdir()); // 获取临时目录
console.log(os.homedir()); // 获取用户主目录

// 知道这些信息有什么用？ 根据操作系统平台和架构，执行不同的命令
// 打开浏览器
function openBrowser(url) {
  const childProcess = require('child_process');
  if (os.platform() === 'darwin') {
    childProcess.exec(`open ${url}`);
  } else if (os.platform() === 'win32') {
    childProcess.exec(`start ${url}`);
  } else {
    console.log('Unsupported platform');
  }
}

openBrowser('https://www.baidu.com');
