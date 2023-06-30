const fs = require('fs');

/*
! 获取文件信息回调方式
*/
fs.stat('./test.txt', (err, stats) => {
  if (err) {
    throw err;
  }
  /*
  Stats {
    dev: 16777233,
    mode: 33188,
    nlink: 1,
    uid: 501,
    gid: 20,
    rdev: 0,
    blksize: 4096,
    ino: 2226916,
    size: 41,
    blocks: 8,
    atimeMs: 1674119246029.4426,
    mtimeMs: 1674119244567.3833,
    ctimeMs: 1674119244567.3833,
    birthtimeMs: 1668522031389.728,
    atime: 2023-01-19T09:07:26.029Z,
    mtime: 2023-01-19T09:07:24.567Z,
    ctime: 2023-01-19T09:07:24.567Z,
    birthtime: 2022-11-15T14:20:31.390Z
  }
  */
  console.log(stats);
  console.log(stats.isFile()); // true  是否为常规文件
  console.log(stats.isDirectory()); // true  是否为文件目录
});

/*
! 同步方式
*/
const stats = fs.statSync('./test.txt');
console.log(stats);

/*
! 异步方式
*/
fs.promises.stat('./test.txt').then((stats) => {
  console.log(stats);
});

fs.open('./test.txt', (err, fd) => {
  if (err) {
    throw err;
  }

  // 通过文件描述符fd来获取文件信息
  const stats = fs.fstatSync(fd);
  console.log('***', stats);
});
