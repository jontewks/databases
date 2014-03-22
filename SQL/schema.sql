CREATE DATABASE chat;

USE chat;
-- CREATE TABLE Rooms(
--   roomname varchar(15) NOT NULL,
--   PRIMARY KEY (roomname)
-- );


-- CREATE TABLE Users (
--   username varchar(15) NOT NULL,
--   roomname varchar(15) NOT NULL,
--   PRIMARY KEY (username),
--   FOREIGN KEY (roomname) REFERENCES Rooms(roomname)
-- );
CREATE TABLE Messages (
 /* Describe your table here.*/
 id int NOT NULL AUTO_INCREMENT,
 roomname varchar(15) NOT NULL,
 username varchar(15) NOT NULL,
 message varchar(100) NOT NULL,
 -- time date DEFAULT CURRENT_TIMESTAMP,
 PRIMARY KEY (id)
 -- FOREIGN KEY (roomname) REFERENCES Rooms(roomname),
 -- FOREIGN KEY (username) REFERENCES Users(username)
);

/* You can also create more tables, if you need them... */

/*  Execute this file from the command line by typing:
 *    mysql < schema.sql
 *  to create the database and the tables.*/
