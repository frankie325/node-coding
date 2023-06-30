define(function (require, exports, module) {
  // 导入模块
  const foo = require('./module/foo');

  console.log(foo.name);
  console.log(foo.age);
});
