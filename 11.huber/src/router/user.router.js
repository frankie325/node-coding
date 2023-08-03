const Router = require('@koa/router');
const userController = require('../controller/user.controller');
const { verifyUser, handlePassword } = require('../middleware/user.middleware');
const router = new Router({
  prefix: '/user',
});

// router.get('/', userController.create);

// verifyUser校验用户名和密码
// handlePassword对密码进行，加密解密处理
router.post('/', verifyUser, handlePassword, userController.create);

module.exports = router;
