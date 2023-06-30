const { program } = require('commander');

//* 定义选项时可以指定选项的默认值

program.option('-c, --cheese <type>', 'add the specified type of cheese', 'blue');

program.parse();

/*
执行命令： node options-default.js
*/
console.log(`cheese: ${program.opts().cheese}`); // cheese: blue

