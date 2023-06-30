const { program } = require('commander');

//*也可以指定一个选项，即作为boolean选项也可以作为带参数选项（使用放括号，例如--optional [value]）


program
  .option('-c, --cheese [type]', 'Add cheese with optional type');

program.parse(process.argv);

/*
执行命令：node options-boolean-or-value.js
输出：{}
执行命令：node options-boolean-or-value.js -c
输出：{cheese: true}
执行命令：node options-boolean-or-value.js --cheese mozzarella
输出：{ cheese: 'mozzarella' }

* 可选的带参数选项是非贪婪的，它将会忽略以短横线-开始的参数，比如：
--id -5中 -5不能作为参数，但是能以--id=-5的形式组合使用
*/
console.log(program.opts())