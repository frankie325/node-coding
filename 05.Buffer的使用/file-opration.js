const fs = require('fs');

// 读取文本文件
fs.readFile('./foo.txt', (err, data) => {
  // 未指定第二个参数，则回调返回的是Buffer
  console.log(data); // <Buffer e5 bc a0 e4 b8 89>
  console.log(data.toString()); // 张三
});

// 读取图片文件
fs.readFile('./bar.png', (err, data) => {
  console.log(data); //<Buffer 52 49 46 46 14 d2 15 00 57 45 42 50 56 50 38 58 0a 00 00 00 28 00 00 00 5f 18 00 3f 10 00 49 43 43 50 48 0c 00 00 00 00 0c 48 4c 69 6e 6f 02 10 00 00 ... 1429994 more bytes>

  // 读取后写入文件
  fs.writeFile('./bar_copy.png', data, (err) => {
    console.error(err);
  });
});
