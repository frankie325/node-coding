/*
ESModule和Commonjs之间互相导入

1. 通常情况下Commonjs无法导入ESModule，因为ESModule必须经过静态分析

2. 多数情况下ESModule可以导入Commonjs，会将module.exports的导出内容当做默认导出使用
*/

// 报错，require不能导入ESModule模块
const { name, age } = require('./module/foo.mjs');

console.log(name, age);
