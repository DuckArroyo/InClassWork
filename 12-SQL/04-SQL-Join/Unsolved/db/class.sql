DROP DATABASE IF EXISTS inventory_db;
CREATE DATABASE inventory_db;

USE inventory_db;

CREATE TABLE prices (
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  price DECIMAL(10,2) NOT NULL
);

CREATE TABLE books(
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  book_name VARCHAR(30) NOT NULL,
  price INTEGER,
  in_stock BOOLEAN,
  FOREIGN KEY (price) REFERENCES prices(id) ON DELETE SET NULL
);
INSERT INTO prices (price)
VALUES (1.50),
       (2.75),
       (5.50),
       (10.25),
       (15.75);

INSERT INTO books (book_name, price)
VALUES ("The Great Gatsby", 1),
       ("Huckleberry Finn", 3),
       ("100 Years of Solitude", 5),
       ("Things Fall Apart", 1),
       ("Crime and Punishment", 2),
       ("Moby Dick",  4),
       ("Decameron", 1);


-- JOIN
USE inventory_db;
SELECT * FROM `prices` CROSS JOIN `books`;

-- INNER JOIN
SELECT a.book_name, b.price
FROM `books` AS a
INNER JOIN `prices` AS b
ON a.price = b.id;

--OUTTER JOIN
SELECT a.book_name, b.price
FROM `books` AS a
LEFT JOIN `prices` AS b
ON a.price = b.id;