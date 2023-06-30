const express = require('express');
const app = express();
const user = require('./routers/users.js');

// 任何发送到 /users 的请求将会被发送到定义的路由
app.use('/users', user);

const port = 8000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
