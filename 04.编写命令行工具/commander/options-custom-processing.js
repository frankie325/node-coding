#!/usr/bin/env node

// This is used as an example in the README for:
//    Custom option processing
//    You may specify a function to do custom processing of option values.

const commander = require('commander'); // (normal include)
// const commander = require('../'); // include commander in git clone of commander repo
const program = new commander.Command();

/*
 * 自定义选项处理：
 * 你可以指定一个自定义方法处理选项参数，这个回调方法接受两个参数，用户输入的参数和前一个输入的选项值
 */
function myParseInt(value, dummyPrevious) {
  /*
  node options-custom-processing --integer 2 --integer 3
  多次选项输入时，选项命令输入几次，这边就会调用几次
  dummyPrevious表示上次调用时该方法返回的值，(刚开始为默认值)，输出为：
  2 4
  3 2
  */
  console.log(value, dummyPrevious);
  // parseInt takes a string and a radix
  const parsedValue = parseInt(value, 10);
  if (isNaN(parsedValue)) {
    throw new commander.InvalidArgumentError('Not a number.');
  }
  return parsedValue;
}

function increaseVerbosity(dummyValue, previous) {
  console.log(previous);
  return previous + 1;
}

function collect(value, previous) {
  return previous.concat([value]);
}

function commaSeparatedList(value, dummyPrevious) {
  return value.split(',');
}

program
  .option('-f, --float <number>', 'float argument', parseFloat)
  .option('-i, --integer <number>', 'integer argument', myParseInt, 4) //设置默认值
  .option('-v, --verbose', 'verbosity that can be increased', increaseVerbosity, 0)
  .option('-c, --collect <value>', 'repeatable value', collect, [])
  .option('-l, --list <items>', 'comma separated list', commaSeparatedList);

program.parse();

const options = program.opts();
if (options.float !== undefined) console.log(`float: ${options.float}`);
if (options.integer !== undefined) console.log(`integer: ${options.integer}`);
if (options.verbose > 0) console.log(`verbosity: ${options.verbose}`);
if (options.collect.length > 0) console.log(options.collect);
if (options.list !== undefined) console.log(options.list);

// Try the following:
//    node options-custom-processing -f 1e2
//    node options-custom-processing --integer 2
//    node options-custom-processing -v -v -v
//    node options-custom-processing -c a -c b -c c
//    node options-custom-processing --list x,y,z
