const express = require('express');
const app = express();

// app.use((req, res, next) => {
//   console.log('Hello Middleware');
//   如果没有调用next则不会往下传递
// });

//* router-level-middleware 路由层中间件 
app.use('/home', (req, res, next) => {
  // 不论post、get还是其他方法，只要路径是/home都能匹配到
  console.log('hello router-level-middleware1');
  next();
});

app.use('/home', (req, res, next) => {
  console.log('hello router-level-middleware2');
  res.end('Hello Middleware');
});

const port = 8000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
