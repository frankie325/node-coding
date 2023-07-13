# 查询多个表会横向叠加到一起，而数据会形成一个笛卡尔积
SELECT * FROM products, brand;

# 内连接 inner|cross join （inner|cross可省略，join默认为内连接）
-- 只有数据存在时才能连接。即连接结果不能出现空行。
SELECT * FROM products JOIN brand ON products.brand_id = brand.id;
SELECT * FROM products CROSS join brand ON products.brand_id = brand.id;


# 左外连接 left outer join(outer可省略): 如果数据不存在，左表记录会出现，而右表为null填充
-- 查询所有手机以及对应的品牌
SELECT * FROM products LEFT OUTER JOIN brand ON products.brand_id = brand.id;
-- 查询所有手机没有对应的品牌
SELECT * FROM products LEFT JOIN brand ON products.brand_id = brand.id WHERE brand.id IS NULL;


# 右外连接 right join: 如果数据不存在 ，右表记录会出现，而左表为null填充
-- 查询所有品牌对应的手机数据
SELECT * FROM products RIGHT OUTER JOIN brand ON products.brand_id = brand.id;
-- 查询所有品牌没有对应手机的数据
SELECT * FROM products RIGHT JOIN brand ON products.brand_id = brand.id WHERE brand_id IS NULL;

# 全连接
-- mysql不支持FULL OUTER JOIN语句
-- SELECT * FROM products FULL OUTER JOIN brand ON products.brand_id = brand.id;
-- 可以使用联合 UNION，将多个查询的结果组合成一个结果集合
(SELECT * FROM products LEFT JOIN brand ON products.brand_id = brand.id) 
UNION 
(SELECT * FROM products RIGHT OUTER JOIN brand ON products.brand_id = brand.id);

 
(SELECT * FROM products LEFT JOIN brand ON products.brand_id = brand.id WHERE brand.id IS NULL) 
UNION 
(SELECT * FROM products RIGHT JOIN brand ON products.brand_id = brand.id WHERE brand_id IS NULL);