# 查看所有数据库
SHOW DATABASES;

# 选择摸一个数据库
USE test;

# 查看当前使用的数据库
SELECT DATABASE();

# 创建一个新的数据库
-- CREATE DATABASE douyu;
CREATE DATABASE IF NOT EXISTS douyu; # 如果不存在则创建
-- CREATE DATABASE IF NOT EXISTS douyu CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ; # 设置字符集

# 修改数据库编码
ALTER DATABASE douyu CHARACTER SET utf8mb3;

# 删除数据库
DROP DATABASE IF EXISTS douyu;