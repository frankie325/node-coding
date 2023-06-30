#!/usr/bin/env node

// This example shows giving alternative names for a command.

const { Command } = require('commander'); // (normal include)
// const { Command } = require('../'); // include commander in git clone of commander repo
const program = new Command();

program
  .command('exec')
  .argument('<script>')
  .alias('ex') //设置子命令别名
  .action((script) => {
    console.log(`execute: ${script}`);
  });

program
  .command('print')
  .argument('<file>')
  // Multiple aliases is unusual but supported! You can call alias multiple times,
  // and/or add multiple aliases at once. Only the first alias is displayed in the help.
  // 多个别名并不常用，但也支持。你可以多次调用alias
  // 后者调用只调用一次aliases，只有第一个别名会在help信息中显示
  .alias('p')
  .alias('pr')
  .aliases(['display', 'show'])
  .action((file) => {
    console.log(`print: ${file}`);
  });

program.parse();

// Try the following:
//    node command-alias.js --help
//    node command-alias.js exec script
//    node command-alias.js ex script
//    node command-alias.js print file
//    node command-alias.js pr file
//    node command-alias.js show file