const fs = require('fs');
const path = require('path');
/*
! 重命名文件
*/
// fs.rename('./oldFile.txt', './newFile.txt', (err) => {
//   if (err) throw err;
//   console.log('Rename complete!');
// });

const oldFile = path.resolve(__dirname, 'oldFile.txt');
const newFile = path.resolve(__dirname, 'newFile.txt');

try {
  fs.accessSync(oldFile, fs.constants.F_OK); //用来判断文件是否存在
  fs.rename(oldFile, newFile, (err) => {
    if (err) throw err;
    console.log('Rename complete!');
  });
} catch (error) {
  // 报错说明oldFile不存在
  fs.rename(newFile, oldFile, (err) => {
    if (err) throw err;
    console.log('Rename complete!');
  });
}
