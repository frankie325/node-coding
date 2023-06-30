let name = 'kfg';
let age = 23;
const sayHello = function () {
  console.log('hello ' + name);
};

setTimeout(() => {
  console.log(name);
  // 在模块中修改变量值，模块环境记录中的值会跟着改变
  name = 'new kfg';
}, 2000);

// 注意：这里导出的不是对象，而是一个新的语法，export和import都是关键字
export { name, age, sayHello as default };
