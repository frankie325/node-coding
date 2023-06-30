const Router = require('@koa/router');

const router = new Router({
  prefix: '/users',
});

router.get('/', (ctx, next) => {
  ctx.body = '获取用户信息成功';
});

router.post('/', (ctx, next) => {
  ctx.body = '上传用户信息成功';
});

module.exports = router;
