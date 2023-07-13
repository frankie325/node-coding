# 插入数据
INSERT INTO user (name, age, telPhone) VALUES ('kfg', 24, 17375828765);
INSERT INTO user (name, age, telPhone) VALUES ('kfg2', 24, 17375828766);

# 自动设置值
ALTER TABLE `user` MODIFY createTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP;
-- ALTER TABLE `user` MODIFY createTime TIMESTAMP ON UPDATE CURRENT_TIMESTAMP; 数据更新时修改时间

# 删除所有数据
DELETE FROM `user`;

# 删除符合条件的数据
DELETE FROM `user` WHERE id=1001;

# 更新数据
UPDATE `user` SET name = 'lily', telPhone = '10010010' WHERE id=1005;;