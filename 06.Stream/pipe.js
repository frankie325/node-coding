const fs = require('fs');

// 使用Stream读取文件并将内容转移到新文件
const reader = fs.createReadStream('./foo.txt');
const writer = fs.createWriteStream('./zoo.txt');

reader.pipe(writer);
// writer.close();