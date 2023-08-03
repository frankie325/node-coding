const { NAME_OR_PASSWORD_IS_REQUIRED, USER_ALREADY_EXISTS } = require('../constants/error-types');

// 统一的错误处理
const errorHandle = (error, ctx) => {
  //   console.log(error.message);
  let status = null;
  let message = null;

  switch (error.message) {
    case NAME_OR_PASSWORD_IS_REQUIRED:
      status = 400;
      message = '用户名或者密码不能为空';
      break;

    case USER_ALREADY_EXISTS:
      status = 409;
      message = '用户已经存在';
      break;

    default:
      status = 500;
      message = '服务器内部错误';
      break;
  }

  ctx.status = status;
  ctx.body = message;
};

module.exports = errorHandle;
