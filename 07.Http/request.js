const http = require('http');
const url = require('url');
const qs = require('querystring');
// 创建方式一：
const server = http.createServer((req, res) => {
  // request对象中封装了客户端给我们服务器传递过来的所有信息
  console.log(req.url); //请求路径
  console.log(req.method); //请求方法
  console.log(req.headers); //请求头信息
  res.end('Hello Server');
});

server.listen(8000, () => {
  console.log('服务器启动成功 => localhost:8000');
});
