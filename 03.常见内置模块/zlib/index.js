const fs = require('fs');
const zlib = require('zlib');

// 压缩
// const reader = fs.createReadStream('./foo.txt');
// const writer = fs.createWriteStream('./foo.txt.gz');

// const gzip = zlib.createGzip();

// reader.pipe(gzip).pipe(writer);

// 解压
const reader2 = fs.createReadStream('./foo.txt.gz');
const writer2 = fs.createWriteStream('./foo.txt');

const gunzip = zlib.createGunzip();

reader2.pipe(gunzip).pipe(writer2);
