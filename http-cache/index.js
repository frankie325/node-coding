const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());

/*
强缓存案例(Expires):
    Expires: 该字段指定响应的到期时间，即资源不再被视为有效的日期和时间。它是一个 HTTP 1.0 的头部字段，但仍然被一些客户端和服务器使用。
    Expires 的判断机制是：当客户端请求资源时，会获取本地时间戳，然后拿本地时间戳与 Expires 设置的时间做对比，如果对比成功，走强缓存，对比失败，则对服务器发起请求。
    没过期之前使用缓存的值，过期之后从服务器读取

    优点：
        1. 减少了冗余的数据传输，节省了带宽
        2. 减少了服务器的负担
    缺点：
        1. 服务器无法感知客户端是否已经缓存了资源，只能通过时间来判断
        2. 如果客户端的时间和服务器的时间不一致，可能会导致缓存失效
*/
// app.get('/', (req, res) => {
//   res.setHeader('Expires', new Date('2025-2-7 10:38:00').toUTCString());
//   res.json({
//     name: 'cache',
//     version: '1.0.0',
//   });
// });

/*
强缓存案例(Cache-Control)
    Cache-Control 的值如下：
    max-age：浏览器资源缓存的时长(秒)。
    no-cache：不走强缓存，走协商缓存。
    no-store：禁止任何缓存策略。
    public：资源即可以被浏览器缓存也可以被代理服务器缓存(CDN)。
    private：资源只能被客户端缓存。

如果 max-age 和 Expires 同时出现 max-age 优先级高
*/
app.get('/', (req, res) => {
  res.setHeader('Cache-Control', 'public, max-age=10'); //20秒
  res.json({
    name: 'cache',
    version: '1.0.0',
  });
});

// 当涉及到缓存机制时，强缓存优先于协商缓存。
// 如果强缓存未命中（例如max-age过期），或者服务器响应中设置了Cache-Control: no-cache,，则客户端会发起协商缓存的请求

/*
协商缓存(Last-Modified)
Last-Modified 和 If-Modified-Since：服务器通过 Last-Modified 响应头告知客户端资源的最后修改时间。
客户端在后续请求中通过 If-Modified-Since 请求头携带该时间，服务器判断资源是否有更新。如果没有更新，返回 304 状态码。
*/
const getModifyTime = () => {
  return fs.statSync(path.resolve(__dirname, './test.txt')).mtime.toISOString(); //获取文件最后修改时间
};
app.get('/api', (req, res) => {
  res.setHeader('Cache-Control', 'no-cache, max-age=2592000'); //表示走协商缓存
  const ifModifiedSince = req.headers['if-modified-since']; //获取浏览器上次修改时间
  res.setHeader('Last-Modified', getModifyTime());
  if (ifModifiedSince && ifModifiedSince === getModifyTime()) {
    // 如果文件最后修改时间和上次修改时间一致，说明文件没有修改，返回304
    console.log('304');
    res.status(304).end();
  } else {
    console.log('200');
    res.end('value');
  }
});

/*
协商缓存(ETag)
ETag 和 If-None-Match：服务器通过 ETag 响应头给资源生成一个唯一标识符。
客户端在后续请求中通过 If-None-Match 请求头携带该标识符，服务器根据标识符判断资源是否有更新。如果没有更新，返回 304 状态码。

ETag 优先级比 Last-Modified 高
*/
const crypto = require('crypto');
// ETag实际就是文件的hash值
const getFileHash = () => {
  return crypto.createHash('sha256').update(path.resolve(__dirname, './test.txt')).digest('hex');
};
app.get('/etag', (req, res) => {
  res.setHeader('Cache-Control', 'no-cache, max-age=2592000'); //表示走协商缓存
  const etag = getFileHash();
  const ifNoneMatch = req.headers['if-none-match']; //获取浏览器上次修改时间
  res.setHeader('Last-Modified', getModifyTime());
  if (ifNoneMatch === etag) {
    // 如果文件最新的hash和上次hash值一致，说明文件没有修改，返回304
    res.sendStatus(304);
    return;
  }
  res.setHeader('ETag', etag);
  res.send('Etag');
});

app.listen(3000, () => {
  console.log('server is running at http://localhost:3000');
});
