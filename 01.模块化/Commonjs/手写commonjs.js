const modules = {
  './index.js': function (module, exports, require) {
    // module.exports和exports就是同一个对象
    let count = 1;

    function add() {
      return count++;
    }

    // exports = ...的使用方式是错误的，会丢失对module.exports的引用
    // 导出的就是对变量的引用
    module.exports = {
      count,
      add,
    };
  },
};

// 缓存导出的模块
const cacheModules = {};

function myRequire(path) {
  // 如果有缓存，则直接返回缓存，*****所以不论使用require()导入模块多次，也只会在第一次时执行*****
  const cache = cacheModules[path];
  if (cache !== undefined) {
    return cache.exports;
  }

  const module = (cacheModules[path] = {
    exports: {},
  });

  // 加载模块
  modules[path](module, module.exports, myRequire);

  return module.exports;
}

// ******commonjs是运行时加载*****
console.log(myRequire('./index.js'));
console.log(myRequire('./index.js').add()); //1  这里是模块内部的count
console.log('count', myRequire('./index.js').count); //1  这里是导出的count，为拷贝
console.log(myRequire('./index.js').add()); //2  这里是模块内部的count
console.log('count', myRequire('./index.js').count); //1  这里是导出的count，为拷贝
