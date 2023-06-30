const fs = require('fs');

/*
! 拷贝文件
*/
fs.copyFile(
  './testcopy/cp.txt',
  './testcopy/cp_copy.txt',
  fs.constants.COPYFILE_EXCL, //如果目标文件存在拷贝操作将会失败
  // fs.constants.COPYFILE_FICLONE, //拷贝操作将尝试创建写时拷贝（copy-on-write）链接。如果平台不支持写时拷贝，则使用后备的拷贝机制。
  //   fs.constants.COPYFILE_EXCL, //拷贝操作将尝试创建写时拷贝链接。如果平台不支持写时拷贝，则拷贝操作将失败。
  (err) => {
    if (err) throw err;
    console.log('copy success');
  }
);
