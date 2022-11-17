DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id INTEGER(11) AUTO_INCREMENT PRIMARY KEY,
  room_id INTEGER(11),
  text VARCHAR(1000),
  username_id INTEGER(11)
  -- FOREIGN KEY(username) REFERENCES (usernames.text),
  -- FOREIGN KEY(room_id) REFERENCES (rooms(id))
  /* Describe your table here.
  message id
  room_name
  username
  text
  */
);

CREATE TABLE rooms (
  id INTEGER(11) AUTO_INCREMENT PRIMARY KEY,
  text VARCHAR(1000)
);


CREATE TABLE usernames (
  id INTEGER(11) AUTO_INCREMENT PRIMARY KEY,
  text VARCHAR(1000)
);
/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

DESCRIBE messages;
DESCRIBE rooms;
DESCRIBE usernames;