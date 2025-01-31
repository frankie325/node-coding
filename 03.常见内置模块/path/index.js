const path = require('path');

const filePath = '/User/frank/hello.txt';
console.log(__dirname); // 当前文件所在目录路径  /Users/frank/code/mine/node-coding/03.常见内置模块/path
console.log(__filename); // 当前文件路径
console.log(path.sep); // 路径分割符  windows为\  posix为/
console.log(' ', filePath); // /User/frank   返回所在的文件路径
console.log('basename', path.basename(filePath)); // hello.txt     返回文件名字
console.log('extname', path.extname(filePath)); // .txt          返回文件后缀名称

/*
! path.join 路径拼接
 */
const path1 = './User/frank';
const path2 = 'foo.js';

console.log(path.join(path1, path2)); //  /User/frank/foo.js

/*
! path.resolve 路径解析
解析规则：
1. 从右到左处理给定的路径片段（空字符将被忽略），随后的路径会往前面添加直到生成绝对路径，则结束解析
2. 如果处理完所有路径片段，还没有生成绝对路径。则会使用当前工作目录（node命令执行时的目录）
3. 如果没有给定路径片段，将会返回当前工作目录的绝对路径
*/

console.log(path.resolve('/foo', '/bar', './baz', './too')); //       /bar/baz/too
console.log(path.resolve('/foo/bar', './baz')); //       /foo/bar/baz
console.log(path.resolve('/foo/bar', '', './baz')); //   /foo/bar/baz
console.log(path.resolve('/foo/bar', '../baz')); //      /foo/baz
console.log(path.resolve('/foo/bar', '/baz')); //        /baz

console.log(path.resolve('./foo/bar', './baz')); //       /Users/frank/code/mine/node-coding/03.常见内置模块/path/foo/bar/baz
console.log(path.resolve()); //                           /Users/frank/code/mine/node-coding/03.常见内置模块/path

/*
! path.relative(from, to)
返回从 ’from‘ 到 ’to‘ 的相对位置
如果from或者to为空字符，则会使用当前工作目录替换掉该空字符
*/

console.log(path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb')); // ../../impl/bbb
console.log(path.relative('/data/orandea/test/aaa', '')); // ../../../../Users/frank/code/mine/node-coding/03.常见内置模块/path

/*
! path.parse
返回一个对象，该对象的属性代表了组成一个path的重要成分
┌─────────────────────┬────────────┐
│          dir        │    base    │
├──────┬              ├──────┬─────┤
│ root │              │ name │ ext │
"  /    home/user/dir / file  .txt "
└──────┴──────────────┴──────┴─────┘
 */

/*
{
  root: '/',
  dir: '/home/user/dir',
  base: 'file.txt',
  ext: '.txt',
  name: 'file'
}
*/
console.log(path.parse('/home/user/dir/file.txt'));

/*
! path.format
提供一个pathObject对象，返回一个路劲字符，和path.parse的功能相反
下面的混合属性中，其中一个具有更高的优先级
1. 如果pathObject.dir提供了，则pathObject.root将被忽略
2. 如果pathObject.base提供了，则pathObject.ext和pathObject.name将被忽略
*/

console.log(
  path.format({
    root: '/ignored',
    dir: '/home/user/dir',
    base: 'file.txt',
  })
); //   /home/user/dir/file.txt
console.log(
  path.format({
    root: '/test/',
    base: 'file.txt',
    ext: 'ignored',
  })
); //   /test/file.txt
console.log(
  path.format({
    root: '/',
    name: 'file',
    ext: '.txt',
  })
); //   /file.txt
console.log('--------------------------------');
// path.posix 提供了对 POSIX（Unix-like 系统，如 Linux、macOS）风格路径的操作方法。
// 它的主要作用是确保在任何操作系统上都使用 POSIX 风格的路径处理方式，而不受当前运行平台的影响。
console.log(path.posix.basename('/foo/bar/baz/asdf/quux.html')); // quux.html
console.log(path.win32.basename('C:\\foo\\bar\\baz\\asdf\\quux.html')); // quux.html

/*
! path.posix 和 path.win32 的主要区别
*/
// 1. 路径分隔符不同
console.log('POSIX separator:', path.posix.sep);  // 输出: /
console.log('Windows separator:', path.win32.sep); // 输出: \

// 2. 路径格式不同
// POSIX 风格
console.log(path.posix.join('/users', 'local', 'bin')); 
// 输出: /users/local/bin

// Windows 风格
console.log(path.win32.join('C:\\Users', 'AppData', 'Local')); 
// 输出: C:\Users\AppData\Local

// 3. 绝对路径判断不同
console.log(path.posix.isAbsolute('/users/local')); // true
console.log(path.posix.isAbsolute('users/local'));  // false
console.log(path.win32.isAbsolute('C:\\Users'));    // true
console.log(path.win32.isAbsolute('Users\\local')); // false

// 4. 根路径格式不同
const posixPath = path.posix.parse('/home/user/file.txt');
console.log('POSIX root:', posixPath.root);  // 输出: /

const winPath = path.win32.parse('C:\\Users\\file.txt');
console.log('Windows root:', winPath.root);   // 输出: C:\