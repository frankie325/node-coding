const http = require('http');
const url = require('url');

http
  .createServer((req, res) => {
    const { pathname } = url.parse(req.url);

    res.writeHead(200, {
      'Content-Type': 'text/plain',
    });

    if (pathname === '/api') {
      res.end('success proxy');
    }
  })
  .listen(4000);
