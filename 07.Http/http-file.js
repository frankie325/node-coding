const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/upload' && req.method === 'POST') {
    // const fileWriter = fs.createWriteStream('./foo.png', { flags: 'a+' });

    let body = '';
    req.on('data', (data) => {
      console.log(data);
      // fileWriter.write(data); //! 错误的文件写入方式，因为data包含的不只有文件内容，还有文件描述信息
      body += data;
    });

    req.on('end', () => {
      console.log(body);
      console.log('文件上传成功');
      res.end('文件上传成功~');
    });
  }
});

server.listen(8000, () => {
  console.log('服务器启动成功 => localhost:8000');
});
