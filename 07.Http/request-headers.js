const http = require('http');

const server = http.createServer((req, res) => {
  // 请求头信息
  // {
  //     'user-agent': 'Apifox/1.0.0 (https://apifox.com)',
  //     'content-type': 'application/json',
  //     accept: '*/*',
  //     host: 'localhost:8000',
  //     'accept-encoding': 'gzip, deflate, br',
  //     connection: 'keep-alive',
  //     'content-length': '36'
  // }
  console.log(req.headers);

  res.end('Hello Server');
});

server.listen(8000, () => {
  console.log('服务器启动成功 => localhost:8000');
});
