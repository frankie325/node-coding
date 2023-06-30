const { Command } = require('commander');
const program = new Command();

program
  .name('string-util')
  .description('CLI to some JavaScript string utilities')
  .version('0.8.0');

/*
* node string-util.js split a/b/c --first --separator=/ 
*
* command('split') 其中split是子指令，例如 vue create xxx 中 create是子指令
* argument('xxx')  表示子命令接收的参数
* .option('xxx')   表示接受的选项，可以根据选项做各种处理
* .action('xxx')   命令执行后回调方法
*/  
program.command('split')
  .description('Split a string into substrings and display as an array')
  .argument('<string>', 'string to split')
  .option('--first', 'display just the first substring')
  .option('-s, --separator <char>', 'separator character', ',')
  .action((str, options) => {
    const limit = options.first ? 1 : undefined;
    console.log(str.split(options.separator, limit)); // 输出[ 'a' ]
  });

program.parse();