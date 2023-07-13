# 将联合查询到的对象转换成对象（一对多）
SELECT products.id, products.title, JSON_OBJECT('id', brand.id, 'name', brand.name) AS brand
 FROM products 
 LEFT JOIN brand ON products.brand_id = brand.id;

# 将查询的多条数据，组织成一个对象，并放入到数组中（多对多）
SELECT stu.id AS studentId, stu.name studentName, 
JSON_ARRAYAGG(JSON_OBJECT('id', cs.id, 'name', cs.name, 'price', cs.price))
FROM students AS stu
LEFT JOIN student_select_courses AS ssc ON stu.id = ssc.student_id
LEFT JOIN courses cs ON ssc.course_id = cs.id
GROUP BY stu.id; 