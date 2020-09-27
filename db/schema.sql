DROP DATABASE IF EXISTS burgers_db;


-- Create the database  
CREATE DATABASE burgers_db;

USE burgers_db;

-- Create the table  
CREATE TABLE burgers;
(
  id int NOT NULL
  AUTO_INCREMENT,
  burger_name varchar
  (30) NOT NULL,
  devoured varchar
  (255) NOT NULL,
  completed BOOLEAN
  
  PRIMARY KEY
  (id)
);