const express = require('express');
const app = express();
const morgan = require('morgan');
var fs = require('fs');
var path = require('path');

// * 输出日志中间件：

// 将所有请求以Apache组合格式输出到command
// app.use(morgan('combined'))

// 将日志输出到指定文件
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });
app.use(morgan('combined', { stream: accessLogStream }));

app.post('/login', (req, res) => {
  res.send('Hello Express!');
});

const port = 8000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
