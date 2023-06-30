const Koa = require('koa');
const serve = require('koa-static');

const app = new Koa();

app.use(serve('./static'));

const port = 8000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
