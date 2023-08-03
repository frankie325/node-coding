const userService = require('../service/user.service');

class UserController {

  async create(ctx, next) {
    // 获取用户传递的参数
    const user = ctx.request.body;
    // 连接数据库插入数据
    const result = await userService.create(user);
    // 返回数据
    ctx.body = result;
  }

 
}

module.exports = new UserController();
