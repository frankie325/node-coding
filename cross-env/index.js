/*
cross-env 是 跨平台设置和使用环境变量 不论是在Windows系统还是POSIX系统。
同时，它提供了一个设置环境变量的脚本，使得您可以在脚本中以unix方式设置环境变量，
然后在Windows上也能兼容运行

cross-env的原理是：
调用SET 如果是posix 就调用export 设置环境变量

set NODE_ENV=production  #windows
export NODE_ENV=production #posix
*/

console.log(process.env.NODE_ENV);

