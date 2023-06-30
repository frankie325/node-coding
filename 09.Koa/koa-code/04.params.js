const Koa = require('koa');

const userRouter = require('./router/users.js');
const app = new Koa();

app.use((ctx, next) => {
  console.log(ctx.request.url);
  console.log(ctx.request.query); // 获取?name=kfg&age=23参数
  //   console.log(ctx.request.params); //koa中没有params参数
  next();
});

userRouter.get('/:id', (ctx, next) => {
  // localhost:8000/users/001
  console.log(ctx.request.params); //使用路由则可以接收restful风格参数
  ctx.body = 'find success';
});

app.use(userRouter.routes()).use(userRouter.allowedMethods());

const port = 8000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
