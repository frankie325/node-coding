#!/usr/bin/env node

const commander = require('commander'); // (normal include)
// const commander = require('../'); // include commander in git clone of commander repo
const program = new commander.Command();


program
  .command('build')
  .description('build web site for deployment')
  .action(() => {
    console.log('build');
  });

program
  .command('deploy', { hidden: true }) //查看--help提示时隐藏该命令信息
  .description('deploy web site to production')
  .action(() => {
    console.log('deploy');
  });

program
  .command('serve', { isDefault: true }) //不输入子命令默认会执行该条命令
  .description('launch web server')
  .option('-p,--port <port_number>', 'web port')
  .action((options) => {
    console.log(`server on port ${options.port}`);
  });

program.parse(process.argv);

// Try the following:
//    node command-default.js -p 80 //默认执行serve命令
//    node command-default.js build
//    node command-default.js serve -p 8080
//    node command-default.js -p 443
