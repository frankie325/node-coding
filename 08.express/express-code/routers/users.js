const express = require('express');

// router对象是一个独立的中间件实例
const router = express.Router();

// 获取指定用户信息
router.post('/:id', (req, res, next) => {
  res.send(`${req.params.id}用户的信息`);
});

// 获取用户信息
router.post('/', (req, res, next) => {
  res.json({ name: 'kfg', age: 23 });
});

module.exports = router;
 