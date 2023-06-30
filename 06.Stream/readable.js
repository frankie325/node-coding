const fs = require('fs');

/*
 * 流是一种连续字节的一种表现形式和抽象概念，流应该是可读的，也是可写的
 *
 * Node中很多对象是基于流实现的
 * http的Request和Response对象
 * process.stdout对象
 *
 * Node中有四种基本流类型
 * Writable：可以向其写入数据的流（例如fs.createWriteStream()）
 * Readable：可以从中读取数据的流（例如fs.createReadStream()）
 * Duplex：同时为Readable和Writable （例如net.Socket()）
 * Transform: Duplex可以在写入和读取数据时修改或转换数据的流 （例如zlib.createDeflate()）
 *
 *
 */
const reader = fs.createReadStream('./foo.txt', {
  start: 3, //从第三字节开始
  end: 6, //到第六字节结束
  highWaterMark: 2, //每次读多少，单位为byte，默认每次为64Kb
});

// 数据读取的过程
reader.on('data', (data) => {
  console.log(data);

  reader.pause(); //暂停读取

  setTimeout(() => {
    reader.resume(); //1s后恢复
  }, 1000);
});

reader.on('open', () => {
  console.log('文件被打开');
});

reader.on('close', () => {
  console.log('文件被关闭');
});
