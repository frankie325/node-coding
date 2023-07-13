const mysql = require('mysql2');

// 连接池通过重用以前的连接来帮助减少连接到 MySQL 服务器所花费的时间，当你完成它们时让它们保持打开而不是关闭。
// 这改善了查询的延迟，因为您避免了建立新连接所带来的所有开销。

// 创建连接池，设置连接池的参数
const pool = mysql.createPool({
  host: '127.0.0.1',
  port: 3306,
  user: 'root',
  database: 'test',
  password: '19990325',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
});

pool.execute('SELECT * FROM products WHERE price > ? AND brand = ?', [100, '苹果'], function (err, results, fields) {
  console.log(results); // 结果集
  console.log(fields); // 额外元数据（如果有）
});
