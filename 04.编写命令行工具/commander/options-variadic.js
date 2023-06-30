const { program } = require('commander');

/*
* 你可以创建一个可变的选项，当声明option时通过追加...到占位符后。在命令行中便可以指定多个选项参数，
* 被解析后的选项值会是一个数组。直到碰到短横线开头的参数，才会停止读取。
* 也可以使用特殊的符号 -- 停止读取参数。
*/


program
  .option('-n, --number <numbers...>', 'specify numbers')
  .option('-l, --letter [letters...]', 'specify letters');

program.parse();

/*
node options-variadic.js -n 1 2 3 --letter a b c
输出：
Options:  { number: [ '1', '2', '3' ], letter: [ 'a', 'b', 'c' ] }
Remaining arguments:  []

node options-variadic.js --letter=A -n80 operand
输出：
Options:  { letter: [ 'A' ], number: [ '80' ] }
Remaining arguments:  [ 'operand' ]

node options-variadic.js --letter -n 1 -n 2 3 -- operand
输出：
Options:  { letter: true, number: [ '1', '2', '3' ] }
Remaining arguments:  [ 'operand' ]
*/
console.log('Options: ', program.opts());
console.log('Remaining arguments: ', program.args);