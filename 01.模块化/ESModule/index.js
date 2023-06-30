/*
import 和 export 在代码编译期间由js引擎负责解析，此时就已经确定了模块之间的依赖关系

ESModule与CommonJs最大的两点区别是：

1. ESModule为静态编译时加载，而Commonjs则是运行时加载

2. ESModule导出为变量的引用，而Commonjs的导出只是简单的拷贝赋值
*/

console.log('hello ESModule');

import say, { name, age } from './module/foo.js';

say();

/*
const name = name 指向foo中的name
无法修改模块环境记录中的值
*/
setTimeout(() => {
  // name = 'new name'; //报错
}, 1000);

setTimeout(() => {
  console.log(name);
}, 3000);

let flag = true;
if (flag) {
  // import语句不能放在运行时代码中
  // import say from './module/foo.js';
  // 如果想要运行时加载,可以使用import函数动态加载
  // import('./module/foo').then((foo) => {});
}
