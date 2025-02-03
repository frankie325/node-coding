const express = require('express');

const app = express();

app.use((req, res, next) => {
  // 允许所有来源的请求
  //   * 表示允许所有来源的请求
  res.setHeader('Access-Control-Allow-Origin', '*');
  // 允许的请求方法
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE,PUT,OPTIONS');
  // 允许的请求头
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/info', (req, res) => {
  //   res.send('Hello Express!');
  res.json({
    name: '张三',
    age: 18,
  });
});

app.patch('/info', (req, res) => {
  res.json({
    name: '张三',
    age: 19,
  });
});

 
app.post('/info', (req, res) => {
    //   res.send('Hello Express!');
    res.set('Custom-Header', 'Custom-Value'); // 设置自定义响应头
    res.set('Access-Control-Expose-Headers', 'Custom-Header'); // 后台必须设置暴露自定义响应头
    res.json({
      name: '张三',
      age: 20,
    });
  });
  
app.listen(8000, () => {
  console.log('Server is running on port 8000');
});
