DROP DATABASE IF EXISTS virtual_arm;

CREATE DATABASE virtual_arm;

USE virtual_arm;

CREATE TABLE users (
  id INT(10) NOT NULL auto_increment,
  user_name VARCHAR(25) DEFAULT '',
  first_name VARCHAR(25) DEFAULT '',
  last_name VARCHAR(25) DEFAULT '',  
  password_hash VARCHAR(80) DEFAULT '',
  is_disabled TINYINT(1) DEFAULT 0,
  bio VARCHAR(500) DEFAULT '',
  rep INT(10) DEFAULT 0,
  avatar_link VARCHAR(200) DEFAULT '',

  PRIMARY KEY (id),
  UNIQUE KEY (user_name)
);

CREATE TABLE user_threads (
  thread_id INT(10) NOT NULL auto_increment,
  creator_user_id INT(10),
  title VARCHAR(50) DEFAULT '',
  body TEXT,
  rating INT(10) DEFAULT 0,
  creation_time DATETIME DEFAULT CURRENT_TIMESTAMP,
  last_update_time DATETIME ON UPDATE CURRENT_TIMESTAMP,

  PRIMARY KEY (thread_id),
  FOREIGN KEY (creator_user_id) REFERENCES users(id)
);