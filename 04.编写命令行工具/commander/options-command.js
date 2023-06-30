const { program } = require('commander');

//* 常用选项类型，boolean型选项和带参数选项
program
  .option('-d, --debug', 'output extra debugging') //boolean类型选项
  .option('-s, --small', 'small pizza size') //boolean类型选项
  .option('-p, --pizza-type <type>', 'flavour of pizza');// 带参数类型选项，,尖括号<>表示需要参数，可以是一个简称


program.parse(process.argv);

/*
执行命令node options-command.js -p
! error: option '-p, --pizza-type <type>' argument missing
! 报错 带参数的选项必须填写参数值

node options-command.js -d -s -p vegetarian
输出：{ debug: true, small: true, pizzaType: 'vegetarian' }

多个boolean类型的选项可以跟在短横线-后组合使用，如：
node options-command.js -d -s -p cheese 可以写作
node options-command.js -ds -p cheese 甚至是写作 node options-command.js -dsp cheese

* 带参数类型的选项是贪婪的，无论跟在后面的是什么值都会被消费，如：
--id -xyz 
其中id是选项，而-xyz会作为id选项的参数
*/ 

const options = program.opts();
if (options.debug) console.log(options);
console.log('pizza details:');
if (options.small) console.log('- small pizza size');
if (options.pizzaType) console.log(`- ${options.pizzaType}`);

/*
* program.parse(arguments) 用来处理命令行参数,arguments是可选的默认值是process.argv,剩下的没有被消费的参数会被放在program.args数组中
* 比如：node options-command.js rest -d -s -p cheese others more
* rest,others和more都没有在程序中定义过，也没有作为选项参数，所以没有被消费
*/ 
console.log(program.args); //['rest', 'others', 'more']