CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  id INT NOT NULL auto_increment,
  message_id INT NOT NULL,
  user_id INT NOT NULL,
  message_text TEXT,
  createdAt TIMESTAMP NOT NULL
);

/* Create other tables and define schemas for them here! */
CREATE TABLE rooms (
  id INT NOT NULL auto_increment,
  roomname VARCHAR(255),
  message_id INT NOT NULL
);

CREATE TABLE users (
  id INT NOT NULL auto_increment,
  username VARCHAR(50)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

