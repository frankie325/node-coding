(function () {
  require.config({
    baseUrl: '',
    paths: {
      foo: './module/foo',
      bar: './module/bar',
    },
  });

  // 导入bar模块
  require(['bar'], function (bar) {
    console.log(bar);
  });
})();
