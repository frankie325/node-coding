const fs = require('fs');

/*
 * 流的写入
 */
const writer = fs.createWriteStream('./bar.txt', {
  flags: 'a',
  start: 4,
});

// 写入
writer.write('你好啊', (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('写入成功');
});

writer.write('Stream', (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('第二次写入成功');
});

// writer.close();

// end可以拆分为两步
// write('end')
// close()
writer.end('end')

writer.on('close', () => {
  console.log('文件被关闭');
});
