const express = require('express');
const app = express();

app.use((req, res, next) => {
  if (req.headers['content-type'] === 'application/json') {
    req.on('data', (data) => {
      // 解析body参数 
      console.log(data.toString(), '\n', typeof data.toString());
      const info = JSON.parse(data.toString());
      req.body = info;
    });
    req.on('end', () => {
      //   res.end('Hello Express');
      next();
    });
  }
});

app.post('/login', (req, res) => {
  // req.body = '';
  console.log(req.body);
  res.send('Hello POST express!');
});

const port = 8000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
