/*
 * 对于前端开发，通常很少和二进制打交道，但对于服务端的很多功能，必须直接去操作二进制数据
 * 所以Node为了方便开发者完成更多功能，提供了一个类Buffer，并且它是全局的
 *
 * 我们可以将Buffer看成存储二进制的数组（注意，二进制数组并不是真正的数组，而是类似数组的对象）
 * 这个数组的每一项可以保存8位二进制
 *
 * 在计算机中，一般不会直接操作一位二进制，因为一位二进制存储的数据非常有限，通常会将8位合在一起作为一个单元，这个单元称之为一个字节（byte）
 */

// * 创建方式一：不推荐（过期）
// const message = 'Hello';

// const buf = new Buffer(message)

/*
显示的时候以十六进制表现
0-15 0-15
0-f  0-f
00 - ff
*/
// console.log(buf) // <Buffer 48 65 6c 6c 6f>

// * 创建方式二：
const message = 'Hello';

const buf = Buffer.from(message);
console.log(buf);

// * 编码方式：

// 默认使用utf-8编码
// const bufName = Buffer.from('李四');
// console.log(bufName)
// console.log(bufName.toString())

const bufName = Buffer.from('李四', 'utf16le');
console.log(bufName);
console.log(bufName.toString('utf-8')); // �e�[R 编码和解码方式应该保持一致，否则输出乱码
console.log(bufName.toString('utf16le')); // 李四
