CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  objectId INT NOT NULL auto_increment,
  username VARCHAR(50) NOT NULL,
  message_text TEXT NOT NULL,
  createdAt TIMESTAMP NOT NULL,
  roomname VARCHAR(50) NOT NULL, 
  UNIQUE KEY(objectId)
);

/* Create other tables and define schemas for them here! */
-- CREATE TABLE rooms (
--   id INT NOT NULL auto_increment,
--   roomname VARCHAR(255) NOT NULL,
--   message_id INT NOT NULL,
--   UNIQUE KEY(id)
-- );

CREATE TABLE users (
  id INT NOT NULL auto_increment,
  username VARCHAR(50) NOT NULL,
  UNIQUE KEY(id)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

