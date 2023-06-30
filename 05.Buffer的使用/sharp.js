// https://github.com/lovell/sharp 可以使用sharp

const sharp = require('sharp');
const fs = require('fs');

// 可以借助sharp库，对图片进行转换处理
sharp('./bar.png')
  .rotate()
  .resize(200)
  .jpeg({ mozjpeg: true })
  .toBuffer()
  .then((data) => {
    // console.log(data);
    // 读取后写入文件
    fs.writeFile('./bar_sharp.png', data, (err) => {
      console.error(err);
    });
  })
  .catch((err) => {
    console.error(err);
  });
