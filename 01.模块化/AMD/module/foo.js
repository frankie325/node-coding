// 定义foo模块
define(function () {
  const name = 'kfg';
  const age = '23';

  const sayHello = function () {
    console.log('hello world');
  };

  return { name, age, sayHello };
});
