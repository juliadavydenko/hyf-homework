USE homework1
--Select the names and phones of all users;
USE homework1;
SELECT email, phone FROM user;

--Select the name of the user with id=10;
USE homework1;
SELECT name FROM user
WHERE id=10;

--Find how many users exist in the database;
USE homework1;
SELECT COUNT(id)
FROM user;

--Select the names of the first 5 users in the database;
USE homework1;
SELECT name
FROM user
LIMIT 5;


--Select the names of the last 3 users in the database;
USE homework1;
SELECT name
FROM user
ORDER BY id DESC
LIMIT 3;

--Sum all the ids in the user table;
USE homework1;
SELECT SUM(id)
FROM user;

--Select all users and order them alphabetically by name;
USE homework1;
SELECT * FROM user
ORDER BY name;

--Find all tasks that include SQL either on the title or on the description;
USE homework1;
SELECT * FROM task
WHERE title LIKE '%SQL%'
OR description LIKE '%SQL%';

--Find the title of all tasks that the user Maryrose is responsible for;
USE homework1;
SELECT title FROM task
WHERE user_id=6;

--Find how many tasks each user is responsible for;
USE homework1;
select avg(n)
from (
    select count(s.id) as n
    from user u left outer join task s on u.id = s.user_id
    group by u.id
) as dt

--Find how many tasks with a status=Done each user is responsible for;
USE homework1;
select avg(d)
from (
    select count(s.id) as d
    from user u left outer join task s on u.id = s.status_id
    group by u.id
) as dt