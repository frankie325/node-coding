// 导入模块
const mysql = require('mysql2');

// 创建一个数据库连接
const connection = mysql.createConnection({
  host: '127.0.0.1',
  port: 3306,
  user: 'root',
  database: 'test',
  password: '19990325',
});

connection.on('error', (err) => {
  console.log('Connection error:', err);
});

connection.on('connect', () => {
  console.log('Authorized: ', connection.authorized);
});

// execute 将在内部调用 prepare 和 query
connection.execute('SELECT * FROM products', function (err, results, fields) {
  //   console.log(results); // 结果集
  //   console.log(fields); // 额外元数据（如果有）
  // 如果再次执行相同的语句，他将从缓存中选取
  // 这能有效的节省准备查询时间获得更好的性能
});
