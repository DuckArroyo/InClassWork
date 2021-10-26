DROP DATABASE IF EXISTS inventory_db;
CREATE DATABASE inventory_db;

USE inventory_db;

CREATE TABLE books(
  id INTEGER NOT NULL,
  book_name VARCHAR(30) NOT NULL
);

CREATE TABLE categories(
  id INTEGER NOT NULL,
  category_name VARCHAR(30) NOT NULL
);

CREATE TABLE prices(
  id INTEGER NOT NULL,
  price DECIMAL(10,2) NOT NULL
);

INSERT INTO books (id, book_name)
VALUES
  (1, 'War and Peace'),
  (2, 'On the Road'),
  (3, 'Crime and Punishment'),
  (4, 'Lord of The Rings'),
  (5, 'Junky');

INSERT INTO categories (id, category_name)
VALUES
  (6, 'Classic'),
  (7, 'Adventure'),
  (8, 'Thriller'),
  (9, 'Fantasy'),
  (0, 'Derp');

INSERT INTO prices (id, price)
VALUES
  (11, '20'),
  (22, '10'),
  (33, '15'),
  (44, '78'),
  (55, '100');