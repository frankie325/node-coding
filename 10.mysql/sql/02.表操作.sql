# 查看所有表
SHOW TABLES;

# 创建表
CREATE TABLE IF NOT EXISTS users (
 id INT PRIMARY KEY AUTO_INCREMENT,
 name VARCHAR(20) NOT NULL,
 age INT DEFAULT 0,
 phone VARCHAR(20) UNIQUE DEFAULT '',
 createTime TIMESTAMP
)

# 查看表信息
DESC users;

# 修改表名称
ALTER TABLE users RENAME TO user;
# ALTER TABLE users TO 库名.表名; 可将表移动到另一个库

# 添加一个新的列
ALTER TABLE user ADD sex CHAR DEFAULT '' NOT NULL AFTER createTime; # 在createTime列后面新增一列 

# 修改字段名称
ALTER TABLE user CHANGE phone telPhone VARCHAR(30);

# 修改字段属性，不能修改字段名
ALTER TABLE user MODIFY name VARCHAR(30);

# 删除某个字段
ALTER TABLE user DROP sex;

# 复制表结构
CREATE TABLE user2 LIKE user;

# 复制表结构和数据
CREATE TABLE user3 AS SELECT * FROM USER;

# 删除表
DROP TABLE IF EXISTS user3;