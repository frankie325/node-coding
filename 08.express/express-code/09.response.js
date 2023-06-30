const express = require('express');
const app = express();

app.post('/login', (req, res) => {
  res.status(200); //设置响应码
  //返回json数据
  res.json({
    name: 'kfg',
    age: 23,
  });
});

const port = 8000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
