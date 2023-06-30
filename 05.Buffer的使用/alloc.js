// 通过alloc方法创建buffer，分配8个字节的内存
const buf = Buffer.alloc(8);
// 没有数据，所以全是00
console.log(buf); //<Buffer 00 00 00 00 00 00 00 00>

buf[0] = 88; //  转换为16进制， 88 => 0x58
buf[1] = 0x88; //  也可以直接设置16进制的值
console.log(buf); //  <Buffer 58 88 00 00 00 00 00 00>


// test
const test = Buffer.alloc(8, 'a'); //第二个参数可以设置一个默认值
console.log(test); // <Buffer 61 61 61 61 61 61 61 61>
