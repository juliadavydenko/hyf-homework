CREATE DATABASE smoothie;
USE smoothie;
CREATE TABLE creator (
  creator_id INT NOT NULL, 
  NAME VARCHAR(255), 
  age_range ENUM, 
  Gender ENUM, 
  PRIMARY KEY (creator_id)
);
CREATE TABLE smoothie (
  smoothie_id INT NOT NULL, 
  NAME VARCHAR(255), 
  category VARCHAR(255), 
  ingredients INT NOT NULL, 
  creator INT NOT NULL, 
  FOREIGN KEY (ingredients) REFERENCES ingredient(ingredient_id), 
  FOREIGN KEY (creator) REFERENCES creator(creator_id), 
  PRIMARY KEY (smoothie_id)
);
CREATE TABLE type (
  type_id INT NOT NULL, 
  NAME VARCHAR(255), 
  PRIMARY KEY (type_id), 
  );
CREATE TABLE color (
  color_id INT NOT NULL, 
  NAME VARCHAR(255), 
  PRIMARY KEY (color_id), 
  );
CREATE TABLE ingredient (
  ingredient_id INT NOT NULL, 
  NAME VARCHAR(255), 
  type_id INT NOT NULL, 
  color_id INT NOT NULL, 
  PRIMARY KEY (ingredient_id), 
  FOREIGN KEY (type_id) REFERENCES type(type_id), 
  FOREIGN KEY (color_id) REFERENCES color(color_id)
);
CREATE TABLE colorType (
  color_id INT NOT NULL, 
  type_id INT NOT NULL,  
  FOREIGN KEY (color_id) REFERENCES color(color_id), 
  FOREIGN KEY (type_id) REFERENCES type(type_id), 
  PRIMARY KEY (color_id, type_id)
);
