const net = require('net');

// 服务端之间的通讯可以直接使用TCP通讯，而不需要上升到http层
// 创建一个tcp服务，并且发送套接字，监听端口号3000
const server = net.createServer((socket) => {
  setInterval(() => {
    socket.write('Hello');
  }, 1000);
  //   socket.pipe(socket);
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
