const express = require('express');

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE,PUT,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
/*
    Server-Sent Events（SSE）是一种在客户端和服务器之间实现单向事件流的机制
    允许服务器主动向客户端发送事件数据。在 SSE 中
    可以使用自定义事件（Custom Events）来发送具有特定类型的事件数据。
*/
app.get('/sse', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream'); // 设置内容类型为event-stream 
  res.setHeader('Cache-Control', 'no-cache'); // 设置缓存控制为no-cache
  res.setHeader('Connection', 'keep-alive'); // 设置连接为keep-alive
  res.write('data: Hello, this is a test message\n\n'); // 写入数据
  res.write('data: Hello, this is a test message\n\n'); // 写入数据
  
  res.write('event: customEvent\n'); // 写入自定义事件
  res.write('data: Hello, this is a custom event message\n\n'); // 写入自定义事件数据
});

app.listen(8000, () => {
  console.log('Server is running on port 8000');
});
