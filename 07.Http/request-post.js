const http = require('http');
const url = require('url');
const qs = require('querystring');
// 创建方式一：
const server = http.createServer((req, res) => {
  /*
   * 发送post 请求：http:localhost:8000/login
   * body传参为json格式 {"name": "kfg", "age": 24}
   */
  if (req.method === 'POST') {

    req.setEncoding('utf-8');
    // 拿到body中的数据，以流的形式进行传输
    req.on('data', (data) => {
      //   console.log(data); // 如果没有使用setEncoding设置编码方式，则为buffer
      const str = data.toString(); // 字符串
      const { name, age } = JSON.parse(str);
      console.log('name', name);
      console.log('age', age);
    });
  }
  res.end('Hello Server');
});

server.listen(8000, () => {
  console.log('服务器启动成功 => localhost:8000');
});
