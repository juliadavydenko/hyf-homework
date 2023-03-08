CREATE DATABASE mealsharing;
USE mealsharing;
CREATE TABLE meal (
    id INT NOT NULL AUTO_INCREMENT, 
    title VARCHAR(255),
    `description` TEXT,
    `location` VARCHAR(255),
    `when` DATETIME,
    max_reservations INT,
    price DECIMAL(3,2),
    created_date DATE,
    PRIMARY KEY(id)
);

CREATE TABLE reservation (
    id INT NOT NULL AUTO_INCREMENT,
    number_of_guests INT,
    meal_id INT,
    created_date DATE,
    contact_phonenumber VARCHAR(255),
    contact_name VARCHAR(255),
    contact_email VARCHAR(255),
    PRIMARY KEY(id),
    FOREIGN KEY (meal_id) REFERENCES meal(id)
);
USE mealsharing;
CREATE TABLE review (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(255),
    description TEXT,
    meal_id INT,
    stars INT,
    created_date DATE,
    PRIMARY KEY(id),
    FOREIGN KEY (meal_id) REFERENCES meal(id)
);

--1.Queries for the 'meal' table
--Get all meals
USE mealsharing
SELECT * FROM meal
--Add a new meal
USE mealsharing
INSERT INTO meal 
VALUES (4, 'Cocoa', "Very tasty and smooth hot cocoa", "Aarhus", '2023-03-08 19:55:05', 5, 15.5, '2023-03-07');
--Get a meal with any id
SELECT * FROM meal
WHERE id = 1; 
--Update a meal with any id
UPDATE meal
SET price = 17.5
WHERE id = 1;
--Delete a meal with any id
DELETE * FROM meal
WHERE id = 1; 

--2.Queries for the 'reservation' table

--Get all reservations
SELECT * FROM reservation;
--Add a new reservation 
INSERT INTO reservation 
VALUES (1, 3, 1, "Aarhus", '2023-03-07', "+45 5035822", "Tom", "tomg@gmail.com");
--Get a reservation with any id
SELECT * FROM reservation
WHERE id = 1; 
--Update a reservation with any id
UPDATE reservation
SET contact_phonenumber = "+45 5035823"
WHERE id = 1;
--Delete a reservation with any id
DELETE * FROM meal
WHERE id = 1; 

--2.Queries for the 'review' table

--Get all reviews

SELECT * FROM review;
--Add a new review
USE mealsharing;
INSERT INTO review
VALUES (1, "Good experience", "Amazing food, highly recommended", 1, 5, '2023-03-07');
--Get a review with any id
SELECT * FROM review
WHERE id = 1; 
--Update a review with any id
UPDATE review
SET created_date = '2023-03-05'
WHERE id = 1;
--Delete a review with any id
DELETE * FROM review
WHERE id = 1; 
