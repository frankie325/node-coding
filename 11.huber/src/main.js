const app = require('./app');
const { bodyParser } = require('@koa/bodyparser'); //解析body参数
require('./app/database');
const errorHandle = require('./app/error-handle');

const config = require('./app/config.js');
const userRouter = require('./router/user.router');

app.use(bodyParser());
app.use(userRouter.routes()).use(userRouter.allowedMethods());

// 错误信息处理 
app.on('error', errorHandle);

app.listen(config.APP_PORT, () => {
  console.log(`服务器启动成功: http://localhost:${config.APP_PORT}`);
});

