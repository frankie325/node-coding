const Koa = require('koa');

const app = new Koa();

app.use((ctx, next) => {
  ctx.app.emit('error', new Error('您还没有登录'), ctx);
});

// 错误捕获
app.on('error', (err, ctx) => {
  let status = 401;
  ctx.status = status;
  ctx.body = err.message;
});

const port = 8000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
