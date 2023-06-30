const express = require('express');
const app = express();

const USER_AlREADY_EXIST = 'user already exist';
const USER_DOES_NOT_EXIST = 'user does not exist';

app.get('/login', (req, res, next) => {
  // 调用next传递错误信息给express
  next(new Error(USER_DOES_NOT_EXIST));
});

app.post('/register', (req, res, next) => {
  next(new Error(USER_AlREADY_EXIST));
});

// 统一的错误拦截处理
app.use((err, req, res, next) => {
  //   console.log(err);
  //   console.log(err.message);
  let status = 400;
  let message = '';
  switch (err.message) {
    case USER_AlREADY_EXIST:
      message = USER_AlREADY_EXIST;
      status = 500;
      break;
    case USER_DOES_NOT_EXIST:
      status = 500;
      message = USER_DOES_NOT_EXIST;

      break;

    default:
      break;
  }

  res.status(status);
  res.json({
    errCode: status,
    errMessage: message,
  });
});

const port = 8000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
