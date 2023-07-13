# 查询所有数据
SELECT * FROM products;

# 查询指定的字段
SELECT id, price FROM products;
 
# 对字段结果起一个别名
SELECT id, title AS newTitle FROM products;

# 查询价格小于100的
SELECT * FROM products WHERE price < 100;

# 查询价格大于20并且小于100的
SELECT * FROM products WHERE  price > 50 AND price < 100;

# 模糊查询；包含video字符的数据
SELECT * FROM products WHERE url LIKE '%video%';

# IN表示取多个值中的其中一个即可  
SELECT * FROM products WHERE title IN ('Prof.', 'Mr.');

# 按照价格升序排序
SELECT * FROM products ORDER BY price ASC; 
# 按照价格升序排序,按照分数
SELECT * FROM products ORDER BY price ASC, score DESC;

# 分页查询 写法一：LIMIT limit OFFSET offset
SELECT * FROM products LIMIT 20 OFFSET 0;
# 分页查询 写法二：LIMIT offset, limit
SELECT * FROM products LIMIT 0,20;