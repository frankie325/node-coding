// This example shows specifying the command arguments using argument() function.

const { Command } = require('commander'); // (normal include)
// const { Command } = require('../'); // include commander in git clone of commander repo
const program = new Command();

/*
 * 添加命令可以使用command方法内直接指定命令参数，也可以使用argument()方法指定命令参数
 */
program
  .name('connect')
  .argument('<server>', 'connect to the specified server')
  .argument('[user]', 'user account for connection', 'guest') //第三个参数为默认值
  .description('Example program with argument descriptions')
  .action((server, user) => {
    console.log('server:', server);
    console.log('user:', user);
  });

// 最后一个参数可以设置为可变长参数，可变长参数将会作为数组传递到action回调中
program
  .version('0.1.0')
  .command('rmdir')
  .argument('<dirs...>')
  .action(function (dirs) {
    dirs.forEach((dir) => {
      console.log('rmdir %s', dir);
    });
  });

program.parse();

// Try the following:
//    node argument.js --help
//    node argument.js main.remote.site
//    node argument.js main.remote.site admin
//    node argument.js rmdir foo bar
