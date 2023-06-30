// * 使用http发送请求
const http = require('http');

// http发送get请求
// http.get('http://localhost:8000', (res) => {
//   res.on('data', (data) => {
//     console.log(data.toString());
//   });

//   res.on('end', () => {
//     console.log('获取到了所有的结果');
//   });
// });

// http发送post请求
const req = http.request(
  {
    method: 'POST',
    hostname: 'localhost',
    port: 8000,
    // 设置请求头
    headers: {
      'Content-Type': 'application/json',
    },
  },
  (res) => {
    res.on('data', (data) => {
      console.log(data.toString());
    });

    res.on('end', () => {
      console.log('获取到了所有的结果');
    });
  }
);

const postData = JSON.stringify({
  name: 'kfg',
  age: 24,
});

req.write(postData); // 往body写入数据
req.end(); //必须调用end表示请求的结束