const fs = require('fs');
const fsp = require('fs/promises'); //promise方式
const path = require('path');

/*
! 写操作回调方式
*/
fs.writeFile(
  path.resolve(__dirname, './test.txt'),
  'hello writeFile',
  {
    encoding: 'utf-8',
    flag: 'w', //清空后写入，文件不存在会被创建，存在则清空后写入
    // flag: 'r+',  //读取并写入文件，如果文件不存在则抛出异常
  },
  (err) => {
    if (err) {
      throw err;
    }
    console.log('writeFile保存成功');
  }
);

/*
! 同步方式
*/
fs.writeFileSync(path.resolve(__dirname, './test.txt'), 'hello writeFileSync', {
  flag: 'a', //追加方式写入
});

/*
! 异步方式
*/
fsp
  .writeFile(path.resolve(__dirname, './test.txt'), 'hello writeFilePromise', {
    flag: 'a', //追加方式写入
  })
  .then((res) => {
    // 成功则返回undefined
    console.log(res, '异步写入成功');
  });
