#!/usr/bin/env node
const { program } = require('commander');

// 以下是option最多的两种使用形式，一种是布尔一种是传递显示的值
program
  .option('--first')
  .option('-s, --separator <char>')
  .action((options) => {
    console.log(options);
  });

//通过program.parse(arguments)方法处理参数，没有被使用的选项会存放在program.args数组中。该方法的参数是可选的，默认值为process.argv。
program.parse(process.argv);

// 在命令行输入 node split.js -s / --first a/b/c
// 获取所有传递的选项
const options = program.opts();

console.log(options); // { separator: '/', first: true }
console.log(options.separator); // '/'
console.log(program.args); // [ 'a/b/c', 'ca' ]

const limit = options.first ? 1 : undefined;
console.log(program.args[0].split(options.separator, limit)); // [ 'a' ]
