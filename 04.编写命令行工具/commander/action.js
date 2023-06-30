#!/usr/bin/env node

// This example is used as an example in the README for the action handler.

const { Command } = require('commander'); // (normal include)
// const { Command } = require('../'); // include commander in git clone of commander repo
const program = new Command();

/*
 * action会将每个声明的命令参数，作为回调函数的参数，其余的两个参数为被解析的options和该命令本身
 */
program
  .argument('<name>')
  .argument('[age]')
  .option('-t, --title <honorific>', 'title to use before name')
  .option('-d, --debug', 'display some debugging')
  .action(function (name, age, options, command) {
    if (options.debug) {
      console.error('Called %s with options %o', command.name(), options);
    }
    const title = options.title ? `${options.title} ` : '';
    console.log(`Thank-you ${title}${name}${age}`);

    /*
     * 可以省略action回调中的参数，直接使用this上的方法访问该命令传递的参数，注意：回调不能是箭头函数
     */
    console.log('this', this.args, this.opts());
  });

program.parse();

// Try the following:
//    node action.js John
//    node action.js Doe --title Mr
//    node action.js --debug Doe --title Mr
