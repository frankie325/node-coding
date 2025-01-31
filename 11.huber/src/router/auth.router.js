const Router = require('@koa/router');
const authController = require('../controller/auth.controller');
const router = new Router({
  prefix: '/auth',
});

//  const
router.post('/login', authController.login  );
module.exports = router;
