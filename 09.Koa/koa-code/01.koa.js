const Koa = require('koa');
const app = new Koa();

app.use(async (ctx) => {
  ctx.body = 'Hello World';
});

const port = 8000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
