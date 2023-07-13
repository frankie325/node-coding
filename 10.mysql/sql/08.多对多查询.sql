 # 多对多关系：学生可以选择多个课程，课程也可以被多个学生选择

CREATE TABLE IF NOT EXISTS students (
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(20) NOT NULL,
	age INT
);

CREATE TABLE IF NOT EXISTS courses (
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(20) NOT NULL,
	price DOUBLE
);

# 建立关系表
CREATE TABLE IF NOT EXISTS student_select_courses (
	id INT PRIMARY KEY AUTO_INCREMENT,
	student_id INT NOT NULL,  
	course_id INT NOT NULL, 
	FOREIGN KEY (student_id) REFERENCES students(id) ON UPDATE CASCADE,
  FOREIGN KEY (course_id) REFERENCES courses(id)  ON UPDATE CASCADE
);


INSERT INTO students (name, age) VALUES ('Sam', 18);
INSERT INTO students (name, age) VALUES ('Tom', 18);
INSERT INTO students (name, age) VALUES ('Lily', 18);
INSERT INTO students (name, age) VALUES ('Amy', 18);
INSERT INTO students (name, age) VALUES ('Lucy', 18);

INSERT INTO courses (name, price) VALUES ('英语', 100);
INSERT INTO courses (name, price) VALUES ('语文', 666);
INSERT INTO courses (name, price) VALUES ('数学', 888);
INSERT INTO courses (name, price) VALUES ('历史', 80 );
INSERT INTO courses (name, price) VALUES ('物理', 888 );


# 插入选择课程数据
INSERT INTO student_select_courses (student_id, course_id) VALUES (1, 1);
INSERT INTO student_select_courses (student_id, course_id) VALUES (1, 2);
INSERT INTO student_select_courses (student_id, course_id) VALUES (1, 3);
INSERT INTO student_select_courses (student_id, course_id) VALUES (2, 3);
INSERT INTO student_select_courses (student_id, course_id) VALUES (2, 4);
INSERT INTO student_select_courses (student_id, course_id) VALUES (3, 1);
INSERT INTO student_select_courses (student_id, course_id) VALUES (3, 4);

# 查询需求 
# 1.查询所有有选课的学生，选择了哪些课程
SELECT stu.id AS studentId, stu.name studentName ,cs.name csName, cs.price csPrice FROM students AS stu 
INNER JOIN student_select_courses AS ssc ON stu.id = ssc.student_id
JOIN courses cs ON ssc.course_id = cs.id;
 
# 2.查询所有学生的选课情况
SELECT stu.id AS studentId, stu.name studentName, cs.name csName, cs.price csPrice FROM students AS stu 
LEFT JOIN student_select_courses AS ssc ON stu.id = ssc.student_id
LEFT JOIN courses cs ON ssc.course_id = cs.id;

# 3.查询没有选课的学生 (2语句后加个条件查询即可)
SELECT stu.id AS studentId, stu.name studentName, cs.name csName, cs.price csPrice FROM students AS stu 
LEFT JOIN student_select_courses AS ssc ON stu.id = ssc.student_id
LEFT JOIN courses cs ON ssc.course_id = cs.i d
WHERE cs.id IS NULL;

# 4.查询哪些课程是没有被选择的 
SELECT * FROM courses cs LEFT JOIN student_select_courses ssc ON cs.id = ssc.course_id WHERE ssc.course_id IS NULL;

# 5.查询某一个学生的选课情况
SELECT stu.id AS studentId, stu.name studentName, cs.name csName, cs.price csPrice FROM students AS stu 
LEFT JOIN student_select_courses AS ssc ON stu.id = ssc.student_id
LEFT JOIN courses cs ON ssc.course_id = cs.id
WHERE stu.name = 'Tom';