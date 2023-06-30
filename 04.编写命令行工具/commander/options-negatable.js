/*
 * 反boolean型选项：
 * 也可以定义一个boolean型选项，使用no-去设置，当使用时会设置为false
 * 如果先定义了--foo选项，那么--no-foo不会改变--foo的默认值，比如下面的--cheese和--no--cheese
 */
program
  .option('--no-sauce', 'Remove sauce')
  .option('--cheese <flavour>', 'cheese flavour', 'mozzarella')
  .option('--no-cheese', 'plain with no cheese')
  .parse();

program.parse();

/*
执行命令：node options-negatable.js
输出：{ sauce: true, cheese: 'mozzarella' }
执行命令：node options-negatable.js --no-sauce
输出：{ sauce: false, cheese: 'mozzarella' }
注意这里cheese选项的默认值没有改变
执行命令：node options-negatable.js --cheese=blue
输出：{ sauce: true, cheese: 'blue' }
执行命令：node options-negatable.js --no-sauce --no-cheese
输出：{ sauce: false, cheese: false }
*/
const options = program.opts();
console.log(options);
