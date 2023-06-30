// 定义bar模块，同时bar模块依赖了foo模块
define(['foo'], function (foo) {
  console.log(foo.name);
  console.log(foo.age);

  return {
    name: 'bar',
    sayHello() {
      foo.sayHello();
    },
  };
});
