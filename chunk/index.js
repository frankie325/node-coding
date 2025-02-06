const express = require('express');
const multer = require('multer');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(cors());
app.use(express.json());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); //将上传文件保存在哪
  },
  filename: function (req, file, cb) {
    cb(null, `${req.body.index}-${req.body.fileName}`); //文件名
  },
});

const upload = multer({ storage });

// 文件上传
app.post('/up', upload.single('file'), (req, res) => {
  res.send('Hello Express!');
});

// 文件合并
app.post('/merge', async (req, res) => {
  const uploadPath = './uploads';
  let files = fs.readdirSync(path.join(process.cwd(), uploadPath));
  files = files.sort((a, b) => a.split('-')[0] - b.split('-')[0]);
  const writePath = path.join(process.cwd(), `images`, `${req.body.fileName}.jpeg`);
  files.forEach((item) => {
    fs.appendFileSync(writePath, fs.readFileSync(path.join(process.cwd(), uploadPath, item)));
    fs.unlinkSync(path.join(process.cwd(), uploadPath, item)); //删除分片
  });

  res.send('ok');
});

app.listen(3000, () => {
  console.log('http://localhost:3000');
});
