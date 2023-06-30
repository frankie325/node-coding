const http = require('http');

/*
* 创建web服务器
*/

// 创建方式一：
const server1 = http.createServer((req, res) => {
  res.end('Hello Server1');
});

// 创建方式二：createServer就是对Server类进行了简单的包装
const server2 = new http.Server((req, res)=>{
  res.end('Hello Server2');
})


/*
* listen为函数重载，可以传递不同的参数
*/
server1.listen(8000, () => {
  console.log('服务器1启动成功 => localhost:8000');
});

server2.listen(8001, () => {
  console.log('服务器2启动成功 => localhost:8001');
});
// 下载nodemon，可以监听文件变化自动重启服务器
// npm i nodemon -g
// 使用 nodemon 运行
// nodemon