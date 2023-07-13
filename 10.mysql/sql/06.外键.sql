# 创建一个brand表，作为主表
CREATE TABLE IF NOT EXISTS  brand (
 id INT PRIMARY KEY AUtO_INCREMENT,
 name VARCHAR(20) NOT NULL,
 website VARCHAR(100),
 phoneRank INT
);

INSERT INTO brand (name, website, phoneRank) VALUES ('苹果', 'www.apple.com', 2);
INSERT INTO brand (name, website, phoneRank) VALUES ('华为', 'www.huawei.com', 3);
INSERT INTO brand (name, website, phoneRank) VALUES ('小米', 'www.xiaomi.com', 4);
INSERT INTO brand (name, website, phoneRank) VALUES ('三星', 'www.sanxin.com', 5);
INSERT INTO brand (name, website, phoneRank) VALUES ('vivo', 'www.vivo.com', 6);

# 添加一个brand_id列作为外键
ALTER TABLE products ADD brand_id INT;
# 修改brand_id为外键 
ALTER TABLE products ADD FOREIGN KEY(brand_id) REFERENCES brand(id);

# 设置外键的值
UPDATE products SET brand_id = 1 WHERE brand = '苹果';
UPDATE products SET brand_id = 2 WHERE brand = '华为';
UPDATE products SET brand_id = 3 WHERE brand = '小米';
UPDATE products SET brand_id = 4 WHERE brand = '三星';
UPDATE products SET brand_id = 5 WHERE brand = 'vivo';

# 查看表信息
SHOW CREATE TABLE products;

-- CREATE TABLE `products` (
--   `id` int NOT NULL AUTO_INCREMENT,
--   `brand` varchar(20) DEFAULT NULL,
--   `title` varchar(100) NOT NULL,
--   `price` double NOT NULL,
--   `score` decimal(2,1) DEFAULT NULL,
--   `url` varchar(100) DEFAULT NULL,
--   `brand_id` int DEFAULT NULL,
--   PRIMARY KEY (`id`),
--   KEY `brand_id` (`brand_id`),
--   CONSTRAINT `products_ibfk_1` FOREIGN KEY (`brand_id`) REFERENCES `brand` (`id`)
-- ) ENGINE=InnoDB AUTO_INCREMENT=3001 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

# 根据名称删除外键  表信息 CONSTRAINT `products_ibfk_1` 表示外键名称
ALTER TABLE products DROP FOREIGN KEY products_ibfk_1;

# 重新添加外键约束 
--  如果指定了 on update 或 on delete：在删除或更新时，有如下几个操作可以选择：
--  1. cascade，级联操作。主表数据被更新（主键值更新），从表也被更新（外键值更新）。主表记录被删除，从表相关记录也被删除。
--  2. set null，设置为null。主表数据被更新（主键值更新），从表的外键被设置为null。主表记录被删除，从表相关记录外键被设置成null。但注意，要求该外键列，没有not null属性约束。
--  3. restrict，拒绝父表删除和更新。
--  4. no action 和restrict相同。
ALTER TABLE products ADD FOREIGN KEY(brand_id) REFERENCES brand(id) ON UPDATE CASCADE ON DELETE RESTRICT;