const express = require('express');
const app = express();

// Multer 会添加一个 body 对象 以及 file 或 files 对象 到 express 的 request 对象中。
// body 对象包含表单的文本域信息，file 或 files 对象包含对象表单上传的文件信息。
const multer = require('multer'); // v1.0.5

// const upload = multer({
//   dest: 'uploads/', //将上传文件保存在哪
// }); // 解析 multipart/form-data

// 磁盘存储引擎可以让你控制文件的存储
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now());
  },
});

const upload = multer({ storage: storage });

app.post('/photos/upload', upload.array('photos', 12), function (req, res, next) {
  console.log(req.files);
  console.log(req.body);
  // req.files 是 `photos` 文件数组的信息
  // req.body 将具有文本域数据，如果存在的话
  res.send('上传成功!');
});

const port = 8000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
