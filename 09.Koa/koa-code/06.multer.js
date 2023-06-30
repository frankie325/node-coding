const Koa = require('koa');
const multer = require('koa-multer'); //解析form-data形式参数
const Router = require('@koa/router');

const app = new Koa();
const router = new Router();
const upload = multer({ dest: 'uploads/' });

// app.use(upload.any()); //接收任何参数

// 文件上传使用avatar字段作为参数，文件信息保存在req.file
router.post('/login', upload.single('avatar'), (ctx, next) => {
  console.log(ctx.req.file); //req是http原生的req对象,multer解析后的参数放在了
  console.log(ctx.req.body); //request是koa封装后的对象
  ctx.body = ctx.req.body;
});

// 文件上传使用photos字段作为参数，最大上传两个文件,文件信息保存在req.files
router.post('/upload', upload.array('photos', 2), (ctx, next) => {
  console.log(ctx.req.files);
  console.log(ctx.req.body);
  ctx.body = ctx.req.body;
});

app.use(router.routes());

const port = 8000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
