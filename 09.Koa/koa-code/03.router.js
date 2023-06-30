const Koa = require('koa');

const userRouter = require('./router/users.js');

const app = new Koa();

app.use((ctx, next) => {
  // ctx.router available
  next();
});

app.use(userRouter.routes()).use(userRouter.allowedMethods());

const port = 8000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
