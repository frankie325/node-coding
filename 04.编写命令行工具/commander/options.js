const { program } = require('commander');

// * 选项由.option()定义，每一个选项都有一个短称和一个长名字，由逗号或空格或垂直间隔符|进行分隔
// * 被解析的选项可以通过调用Command实例上的.opts()方法获取，并且会作为action回调的参数传递
program.option('-s, --separator <char>');

// * 对于多个单词的长选项，选项名会转为驼峰命名法（camel-case），例如--template-engine选项可通过program.opts().templateEngine获取。
program.option('-t, --template-engine <char>');

program.parse(process.argv);

/*
node options.js --separator=123 --template-engine=456 
选项参数有四种使用方式
node options.js -sa        
node options.js -s a
node options.js --separator=a
node options.js --separator a
*/
const options = program.opts();
console.log(options); // { separator: '123', templateEngine: '=123' }

//返回合并的本地和全局选项值
console.log(program.optsWithGlobals()); 
//返回单个选项的值 setOptionValue可以设置
console.log(program.getOptionValue('separator')); // 123
// 选项值的来源
console.log(program.getOptionValueSource('templateEngine'));