const http = require('http');

const server = http.createServer((req, res) => {
  // * 设置状态码
  //   方式一：直接给属性赋值
  //   res.statusCode = 401;

  //   方式二：和header一起设置
  //   res.writeHead(503);

  // * 设置响应头

  //   方式一：
  //   res.setHeader('Content-Type', 'text/plain;charset=utf8');
  //   方式二：
  //   res.writeHead(200, {
  //     'Content-Type': 'text/plain;charset=utf8',
  //   });


    res.writeHead(200, {
      'Content-Type': 'text/html;charset=utf8', //设置为html，则浏览器会将返回的字符作为html处理
    }); 
  // 响应结果
  res.write('<h1>Hello Server</h1>');
  res.end();
});

server.listen(8000, () => {
  console.log('服务器启动成功 => localhost:8000');
});
