const Koa = require('koa');
const { bodyParser } = require('@koa/bodyparser'); //解析body参

const app = new Koa();

app.use(bodyParser()); //解析body参数

app.use((ctx, next) => {
  console.log(ctx.request.body); // { name: 'kfg' }
  ctx.body = ctx.request.body;
  next(); 
});

const port = 8000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
