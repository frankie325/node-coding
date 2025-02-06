const http = require('http');
const { Server } = require('socket.io');
const express = require('express');

const app = express();
app.use('*', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  next();
});

const server = http.createServer(app);
const io = new Server(server, {
  cors: true,
});

/*
存储房间列表
{
    1:[{name,room,id}],
    2:[{name,room,id},{name,room,id}],
    ...
}
*/
const groupList = {};

io.on('connection', (socket) => {
  // socket为当前连接的socket对象
  // console.log('有新的连接', socket);
  socket.on('groupList', (data) => {
    console.log('groupList', data);
  });

  //加入房间
  socket.on('join', (data) => {
    console.log(data);
    const { name, room } = data;
    socket.join(room); //加入房间
    if (!groupList[room]) {
      groupList[room] = [];
    }
    groupList[room].push({ name, room, id: socket.id });

    socket.emit('message', { user: '管理员', text: `${name}进入了房间` });
    // 发送消息给当前连接的客户端
    socket.emit('groupList', groupList);
    // 发送消息给除了当前连接客户端以外的所有客户端
    socket.broadcast.emit('groupList', groupList);
  });

  // 监听客户端发送的消息，然后发送给指定房间的所有客户端
  socket.on('message', ({ room, user, text }) => {
    console.log(111, typeof room, user, text);

    // 发送消息给指定房间的所有客户端
    socket.broadcast.to(room).emit('message', { user, text });
  });

  //断开链接内置事件
  socket.on('disconnect', () => {
    Object.keys(groupList).forEach((key) => {
      let leval = groupList[key].find((item) => item.id === socket.id);
      if (leval) {
        socket.broadcast.to(leval.room).emit('message', { user: '管理员', text: `${leval.name}离开了房间` });
      }
      groupList[key] = groupList[key].filter((item) => item.id !== socket.id);
    });
    socket.broadcast.emit('groupList', groupList);
  });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});
