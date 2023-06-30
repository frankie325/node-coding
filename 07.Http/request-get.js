const http = require('http');
const url = require('url');
const qs = require('querystring');
// 创建方式一：
const server = http.createServer((req, res) => {
  /*
   * 发送get请求：http:localhost:8000/login?name=kfg&age=24
   * req.url = ‘/login?name=kfg&age=24’
   */

  /*
    使用内置url模块解析req.url，返回一个对象
    {
        protocol: null,
        slashes: null,
        auth: null,
        host: null,
        port: null,
        hostname: null,
        hash: null,
        search: '?name=kfg&age=24',
        query: 'name=kfg&age=24', //参数
        pathname: '/login', 
        path: '/login?name=kfg&age=24',
        href: '/login?name=kfg&age=24'
    }
  */
  const parse = url.parse(req.url);
  console.log(parse);
  /*
  使用内置模块querystring解析GET参数，返回解析后的对象
  { '/login?name': 'kfg', age: '24' }
  */
  console.log(qs.parse(parse.query));
  
  res.end('Hello Server');
});

server.listen(8000, () => {
  console.log('服务器启动成功 => localhost:8000');
});
