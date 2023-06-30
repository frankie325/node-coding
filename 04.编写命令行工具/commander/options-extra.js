const { program, Option } = require('commander');

/*
 * 大多数情况下可以使用.option()方法来创建，但对于不太常见的情况，可以通过调用Option构造函数来创建选项
 */

program
  .addOption(new Option('-s, --secret').hideHelp())
  .addOption(new Option('-t, --timeout <delay>', 'timeout in seconds').default(60, 'one minute')) // 默认值
  .addOption(new Option('-d, --drink <size>', 'drink size').choices(['small', 'medium', 'large'])) //选项值必须符合给出的数组
  .addOption(new Option('-p, --port <number>', 'port number').env('PORT')) //可通过设置node环境变量设置选项值
  .addOption(new Option('--donate [amount]', 'optional donation in dollars').preset('20').argParser(parseFloat)) //preset预设一个值，argParser设置自定义handler去处理参数
  .addOption(new Option('--disable-server', 'disables the server').conflicts('port')) //不能和port选项一起使用
  .addOption(new Option('--free-drink', 'small drink included free ').implies({ drink: 'small' }));//implies表示设置--free-drink时会包含着drink选项的设置

program.parse();

console.log('Options: ', program.opts());
// console.log(process.env);

// Try the following:
//    node options-extra.js --help
//    node options-extra.js --drink huge
//    node options-extra.js --free-drink
//    PORT=80 node options-extra.js
//    node options-extra.js --donate
//    node options-extra.js --donate 30.50
//    node options-extra.js --disable-server --port 8000