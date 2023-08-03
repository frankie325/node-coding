const { NAME_OR_PASSWORD_IS_REQUIRED, USER_ALREADY_EXISTS } = require('../constants/error-types');
const userService = require('../service/user.service');
const md5Password = require('../utils/password-handle');

async function verifyUser(ctx, next) {
  // 1.获取用户名称和密码
  const { name, password } = ctx.request.body;

  // 2.判断用户名和密码不能为空
  if (!name || !password) {
    const error = new Error(NAME_OR_PASSWORD_IS_REQUIRED);
    return ctx.app.emit('error', error, ctx);
  }

  // 3.判断这次注册的用户没有注册过
  const result = await userService.getUserByName(name);
  if (result.length) {
    const error = new Error(USER_ALREADY_EXISTS);
    return ctx.app.emit('error', error, ctx);
  }

  await next();
}

// 密码加密处理
async function handlePassword(ctx, next) {
  let { password } = ctx.request.body;
  ctx.request.body.password = md5Password(password);
  await next();
}

module.exports = {
  verifyUser,
  handlePassword,
};
