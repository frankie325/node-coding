const { program } = require('commander');

/*
* 你可以使用.command() 或者 .addCommand()方法描述（子）命令
*/ 


/*
* command的第一个参数为命令名称，命令参数可以跟在名称后面，也可以用.argument()单独指定，
* 参数为必选<>和可选[]，或者是可变长<...>，可变长必须是最后一个参数
*/ 

// 通过绑定处理函数实现命令（这里的指令描述为放在`.command`中）
// 返回新生成的命令（即该子命令）以供继续配置，可以继续生成嵌套子命令
program
  .command('clone <source> [destination]')
  .description('clone a repository into a newly created directory')
  .action((source, destination) => {
    console.log(source);
    console.log(destination);
    console.log('clone command called');
  });

// 通过独立的的可执行文件实现命令 (注意这里指令描述是作为`.command`的第二个参数),独立的的可执行文件实现命令参见pm.js
// 传递了描述作为第二个参数，则返回最顶层的命令以供继续添加子命令
program
  .command('start <service>', 'start named service')
  .command('stop [service]', 'stop named service, or all if no name supplied');

program.parse(process.argv);