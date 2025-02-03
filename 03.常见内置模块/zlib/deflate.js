/*
gzip 和 deflate 区别

Deflate:
    是一种无文件格式的压缩算法。
    仅包含压缩后的数据流，没有额外的头部信息。

gzip:
    基于 deflate 算法，但在压缩数据之前和之后添加了头部和尾部信息。
    头部包含文件标识、压缩方法、时间戳等元数据。
    尾部包含一个校验和，用于验证数据完整性。

    虽然 gzip 和 deflate 都基于相同的压缩算法，但 gzip 增加了更多的元数据，适用于文件压缩和需要更好兼容性的场景。
    而 deflate 则更轻量，适用于数据流的压缩，如在网络协议中传输压缩数据。
*/
const zlib = require('zlib'); 
const http = require('node:http'); 
const server = http.createServer((req,res)=>{
    const txt = 'hello world'.repeat(1000);

    // res.setHeader('Content-Encoding','gzip')
    res.setHeader('Content-Encoding','deflate')
    res.setHeader('Content-type','text/plan;charset=utf-8')
   
    // const result = zlib.gzipSync(txt); //257b
    const result = zlib.deflateSync(txt); //248b
    res.end(result)
})

server.listen(3000)
