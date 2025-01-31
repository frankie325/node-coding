const fs = require('fs');
// jsdom 是一个模拟浏览器环境的库，可以在 Node.js 中使用 DOM API
const { JSDOM } = require('jsdom');

const dom = new JSDOM(`<!DOCTYPE html><div id='app'></div>`);
const window = dom.window;
const document = window.document;

fetch('https://api.thecatapi.com/v1/images/search?limit=10&page=1')
  .then((res) => res.json())
  .then((data) => {
    const app = document.getElementById('app');
    data.forEach((item) => {
      const img = document.createElement('img');
      img.src = item.url;
      img.style.width = '200px';
      img.style.height = '200px';
      app.appendChild(img);
    });
    fs.writeFileSync('./index.html', dom.serialize());
  });

// 我们上面的操作属于SSR （Server-Side Rendering）服务端渲染请求数据和拼装都在服务端完成，
// 而我们的Vue,react 等框架这里不谈(nuxtjs,nextjs)，
// 是在客户端完成渲染拼接的属于CSR（Client-Side Rendering）客户端渲染
