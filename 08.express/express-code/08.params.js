const express = require('express');
const app = express();

// login?name=kfg&age=23 query方式传参
app.get('/login', (req, res) => {
  // 获取query方式传参
  console.log(req.query);
  console.log(req.query.name);
  console.log(req.query.age);
  res.send('Hello Express!');
});

// /profile/001  restful风格传参
app.get('/profile/:id', (req, res) => {
  console.log(req.params);
  console.log(req.params.id);
  res.send('Hello Express!');
});

const port = 8000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
