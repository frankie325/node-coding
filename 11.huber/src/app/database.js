const mysql = require('mysql2');
const config = require('./config.js');

const pool = mysql.createPool({
  host: config.MYSQL_HOST,
  port: config.MYSQL_PORT,
  database: config.MYSQL_DATABASE,
  user: config.MYSQL_USER,
  password: config.MYSQL_PASSWORD,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
});

// For pool initialization, see above
pool.getConnection(function (err, conn) {
  if (err) {
    console.error(err);
  } else {
    conn.connect((err) => {
      if (err) {
        console.log('连接失败：', err);
      } else {
        console.log('数据库连接成功');
      }
    });
  }
  // Do something with the connection
  //   conn.query(/* ... */);
  // Don't forget to release the connection when finished!
  //   pool.releaseConnection(conn);
});

module.exports = pool.promise();
