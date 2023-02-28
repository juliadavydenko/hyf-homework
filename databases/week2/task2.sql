CREATE DATABASE school_task2;
--Class: with the columns: id, name, begins (date), ends (date)
USE school_task2;
CREATE TABLE class (
    id INT NOT NULL,
    name VARCHAR(255),
    begins DATE,
    ends DATE,
    );

ALTER TABLE class ADD PRIMARY KEY(id)
--Student: with the columns: id, name, email, phone, class_id (foreign key)

CREATE TABLE student (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    phone VARCHAR(255),
    class_id INT NOT NULL,
     FOREIGN KEY (class_id) 
     REFERENCES class (id)
);
--Create an index on the name column of the student table.

ALTER TABLE student ADD INDEX studname_index (name)

--Add a new column to the class table named status which can only have the following 
--values: not-started, ongoing, finished (hint: enumerations).

ALTER TABLE class ADD status ENUM ('not-started','ongoing','finished')