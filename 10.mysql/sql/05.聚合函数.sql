# 聚合函数
# 查询所有数据价格的总和
SELECT SUM(price) totalPrice FROM products;

# 查询指定数据价格的总和
SELECT SUM(price) totalPrice FROM products WHERE title='Mrs.';

# 查询所有数据价格的平均值
SELECT AVG(price) averagePrice FROM products;
 
# 查询最低价格和最高价格
SELECT MIN(price) minPrice FROM products;
SELECT MAX(price) maxPrice FROM products;

# 查询总条数
SELECT COUNT(*) AS count FROM products;
# DISTINCT计算时去除重复的条数
SELECT COUNT(DISTINCT price) AS count FROM products;

# 分组: 分组需要配合聚合函数使用
SELECT title, AVG(price) AS averagePrice, COUNT(*) FROM products GROUP BY title;

# HAVING的使用
-- HAVING必须引用GROUP BY子句中的列或用于合计函数中的列
SELECT title, AVG(price) AS averagePrice, COUNT(*) FROM products GROUP BY title HAVING averagePrice > 500;
