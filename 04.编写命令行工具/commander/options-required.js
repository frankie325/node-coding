const { program } = require('commander');

/*
* 你可以使用.requiredOption()指定一个必填选项，这个选项解析后必须要有一个值。
* 通常在命令行中指定值或者直接设置一个默认值，该方方法在其他方面的使用形式和.options()是一样的
*/

program
  .requiredOption('-c, --cheese <type>', 'pizza must have cheese');

program.parse();

/*
执行命令： node options-required.js
! error: required option '-c, --cheese <type>' not specified
*/
console.log(program.opts())