CREATE DATABASE school_task2;
--Class: with the columns: id, name, begins (date), ends (date)
USE school_task2;
CREATE TABLE class (
    id INT NOT NULL,
    name VARCHAR(255),
    begins DATE,
    ends DATE,
    PRIMARY KEY (id)
    );
--Student: with the columns: id, name, email, phone, class_id (foreign key)
USE school_task2;
CREATE TABLE student (
    id INT NOT NULL,
    name VARCHAR(255),
    email VARCHAR(255),
    phone VARCHAR(255),
    class_id INT NOT NULL,
    PRIMARY KEY (id),
     FOREIGN KEY (class_id) 
     REFERENCES class (id) ON DELETE CASCADE,
);

