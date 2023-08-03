const dotenv = require('dotenv');
// 使用dotenv设置环境变量，默认会读取根目录下的.env文件

dotenv.config();

module.exports = { APP_PORT, MYSQL_HOST, MYSQL_PORT, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE } = process.env;
