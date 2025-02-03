// 反向代理服务器

const http = require('http');
const fs = require('fs');
const url = require('url');
const html = fs.readFileSync('./index.html'); //给html文件起个服务
const config = require('./config');
const { createProxyMiddleware } = require('http-proxy-middleware');
http
  .createServer((req, res) => {
    const { pathname } = url.parse(req.url);
    const proxyList = Object.keys(config.server.proxy); //获取代理的路径

    // 反向代理，代理到4000，客户端发送请求给代理服务器，代理服务器转发到真正的服务器，客户端不知道真正的服务器地址
    if (proxyList.includes(pathname)) {
      const proxy = createProxyMiddleware(config.server.proxy[pathname]); //将/api代理到4000端口服务
      proxy(req, res);
      return;
    }
    // console.log(pathname);
    // console.log(proxyList);

    res.writeHead(200, {
      'Content-Type': 'text/html',
    });
    res.end(html); //返回html
  })
  .listen(3000);
