const Koa = require('koa');
const app = new Koa();

app.use((ctx, next) => {
  ctx.status = 200;
  ctx.body = ['1', '2'];
});

const port = 8000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
