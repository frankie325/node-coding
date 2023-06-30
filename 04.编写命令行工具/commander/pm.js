#!/usr/bin/env node
const path = require('path');
const { Command } = require('commander'); // (normal include)
// const { Command } = require('../'); // include commander in git clone of commander repo
const program = new Command();

// Example of subcommands which are implemented as stand-alone executable files.
//
// When `.command()` is invoked with a description argument,
// this tells Commander that you're going to use a stand-alone executable for the subcommand.
//
// Only `install` and `list` are implemented, see pm-install and pm-list.js

/*
 * 当command()带有描述参数时，可以使用独立的可执行文件去实现子命令
 * Commander 会尝试在入口脚本的目录中搜索名称组合为 command-subcommand 的文件，如以下示例中的 pm-install 或 pm-search
 */
program
  .name('pm')
  .version('0.0.1')
  .description('Fake package manager')
  .command('install [name]', 'install one or more packages')
  .alias('i')
  .command('search [query]', 'search with optional query', { executableFile: 'search' })
  .alias('s')
  .executableDir(path.resolve(__dirname, './pm-custom')) //使用 .executableDir() 为子命令指定自定义搜索目录
  .command('update', 'update installed packages', { executableFile: 'updateCustom' }) //使用 executableFile 配置选项指定自定义名称
  .executableDir(path.resolve(__dirname, './pm-custom'))
  .command('list', 'list packages installed', { isDefault: true });

program.parse(process.argv);

// Try the following on macOS or Linux:
//    ./examples/pm
//
// Try the following:
//    node pm
//    node pm help install
//    node pm install -h
//    node pm install foo bar baz
//    node pm install foo bar baz --force
//    node pm search  //将会寻找./pm-custom/search.js文件作为独立的可执行文件
//    node pm update  //将会寻找./pm-custom/updateCustom.js文件作为独立的可执行文件
