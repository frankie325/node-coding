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

// 使用 MySQL2，您还可以提前准备好SQL预处理语句。
// 使用准备好的SQL预处理语句，MySQL 不必每次都为相同的查询做准备，这会带来更好的性能。
// 使用预处理也可以防止SQL注入攻击
connection.execute('SELECT * FROM products WHERE price > ? AND brand = ?', [100, '苹果'], function (err, results, fields) {
  console.log(results); // 结果集
  console.log(fields); // 额外元数据（如果有）
});
