/*
如果直接在node中使用ESModule，将会报错
会给出以下提示，在package.json中设置"type": "module"，或者文件夹以.mjs结尾
To load an ES module, set "type": "module" in the package.json or use the .mjs extension.

*/
import { name, age } from './module/foo.mjs';

console.log(name);

/*
ESModule和Commonjs之间互相导入

1. 通常情况下Commonjs无法导入ESModule，因为ESModule必须经过静态分析

2. 多数情况下ESModule可以导入Commonjs，会将module.exports的导出内容当做默认导出使用
*/
import str from './module/bar.js';

console.log(str);
