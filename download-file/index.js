const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('./static'));

app.post('/download', (req, res) => {
  const { fileName } = req.body;
  const filePath = path.resolve(__dirname, `./static/${fileName}`);
  const content = fs.readFileSync(filePath);
  /*
    Content-Type 指定下载文件的 MIME 类型
        application/octet-stream（二进制流数据）
        application/pdf：Adobe PDF 文件。
        application/json：JSON 数据文件
        image/jpeg：JPEG 图像文件
    
    Content-Disposition 指定服务器返回的内容在浏览器中的处理方式。它可以用于控制文件下载、内联显示或其他处理方式
        attachment：指示浏览器将响应内容作为附件下载。通常与 filename 参数一起使用，用于指定下载文件的名称
        inline：指示浏览器直接在浏览器窗口中打开响应内容，如果内容是可识别的文件类型（例如图片或 PDF），则在浏览器中内联显示
*/
  res.setHeader('Content-Type', 'application/octet-stream');
  res.setHeader('Content-Disposition', `inline; filename=${fileName}`);
  res.send(content);
});

app.listen(3000, () => {
  console.log('server is running at http://localhost:3000');
});
