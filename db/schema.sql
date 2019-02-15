DROP DATABASE IF EXISTS burgers_db;
CREATE database burgers_db;

use burgers_db
select * from burgers

CREATE TABLE burgers (
  id int NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(100) NOT NULL,
  devoured boolean DEFAULT FALSE,
  PRIMARY KEY (id)
);


DROP DATABASE IF EXISTS exampledb;
CREATE DATABASE exampledb;

DROP DATABASE IF EXISTS testdb;
CREATE DATABASE testdb;
