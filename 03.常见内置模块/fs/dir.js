const fs = require('fs');

const dirname = './testmydir';

/*
! 创建文件夹
*/
if (!fs.existsSync(dirname)) {
  // 如果文件不存在则创建
  fs.mkdir(dirname, (err, path) => {
    if (err) {
      throw err;
    }
    console.log(path);
  });
}

/*
! 读取文件夹中所有文件
*/
fs.readdir(
  './testdir',
  {
    withFileTypes: true, // 设为true，则files数组为 fs.Dirent
  },
  (err, files) => {
    if (err) {
      throw err;
    }
    // 返回文件夹中的所有文件名称
    for (const file of files) {
      console.log(file.name);
      console.log(file.isDirectory());
    }
  }
);
