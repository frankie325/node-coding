const { count, add } = require('./add');

console.log(add()); //1
console.log('count', count); //1  导出的是变量的拷贝

console.log(add()); //2
console.log('count', count); //1  导出的是变量的拷贝

console.log(this); //this指向module.exports，没有导出则为空对象
