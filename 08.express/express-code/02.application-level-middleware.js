const express = require('express');
const app = express();

//* application-level-middleware 应用层中间件
// 编写一个普通的中间件
// use注册一个中间件（回调函数）
app.use((req, res, next) => {
  console.log('注册第01个普通的中间件');
  res.end('Hello Middleware');
  next(); // 调用next传递给下一个中间件，如果不调用，则下面的中间件不会执行
});

app.use((req, res, next) => {
  console.log('注册第02个普通的中间件');
  //   res.end('Hello Middleware '); // !error  不能在end调用结束后继续写入数据
  next(); 
});

app.use((req, res, next) => {
  console.log('注册第03个普通的中间件');
});

const port = 8000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
