const Koa = require('koa');
const app = new Koa(); 

// 注册中间件
app.use(async (ctx, next) => {
  if (ctx.request.url === '/login') {
    if (ctx.request.method === 'GET') {
      console.log('login success');
      ctx.body = 'login success';
    }
  }else{
    ctx.body = 'other success';
  }
});

const port = 8000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
