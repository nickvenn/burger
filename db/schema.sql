DROP DATABASE IF EXISTS burgers_db;
CREATE database burgers_db;

use burgers_db

CREATE TABLE burgers (
  id int NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(100) NOT NULL,
  devoured boolean DEFAULT FALSE,
  PRIMARY KEY (id)
);
