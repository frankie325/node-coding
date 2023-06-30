const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.json()); // 解析 application/json
app.use(bodyParser.urlencoded({ extended: true })); // 解析 application/x-www-form-urlencoded

app.post('/login', (req, res) => {
  console.log(req.body); // 输出{ name: 'kfg' }
  res.send('Hello Express!');
});

const port = 8000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
