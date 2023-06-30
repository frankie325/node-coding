const express = require('express');
const app = express();

// 静态资源服务
// app.use(express.static('static'));

// 虚拟前缀，实际在文件中不存在，通过localhost:8000/public/index.html 可以访问到./static文件
app.use('/public', express.static('static'));

const port = 8000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
