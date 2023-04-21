CREATE DATABASE tsnodedb
	CHARACTER set utf8mb4
	collate utf8mb4_unicode_ci
;

show databases;
use tsnodedb

DELETE ROP TABLE users;
CREATE TABLE users (
 	id INT(11) NOT NULL AUTO_INCREMENT,
 	fullname varchar(255) NOT NULL,
 	email varchar(300) NOT NULL,
 	password VARCHAR(300) NOT NULL;
 	status tinyint(4) NOT NULL DEFAULT 1,
 	PRIMARY KEY(id)
);

select * from users;