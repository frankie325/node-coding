// 从传输层实现http协议
const net = require('net');

const html = `<h1>TCP Server</h1>`;

const responseHeader = ['HTTP/1.1 200 OK', 'Content-Type: text/html', 'Content-Length: ' + html.length, 'Server: Nodejs', '\r\n', html];

// net.createServer创建 Unix 域套接字并且返回一个server对象接受一个回调函数
const http = net.createServer((socket) => {
  socket.on('data', (data) => {
    if (data.toString().includes('GET')) {
      /*
        从传输层实现http协议

        socket可以监听很多事件
        close 一旦套接字完全关闭就触发
        connect 当成功建立套接字连接时触发
        data 接收到数据时触发
        end 当套接字的另一端表示传输结束时触发，从而结束套接字的可读端
      */
      socket.write(responseHeader.join('\r\n'));
      socket.end();
    }
  });
});

http.listen(3000, () => {
  console.log('Server is running on port 3000');
});
