
CREATE TABLE users (
user_id 	INT(8) NOT NULL AUTO_INCREMENT,
user_name	VARCHAR(30) NOT NULL,
user_pass  	VARCHAR(255) NOT NULL,
user_rmNum  VARCHAR(30) NOT NULL,
UNIQUE INDEX user_name_unique (user_name),
PRIMARY KEY (user_id)
) TYPE=INNODB;


CREATE TABLE topics (
topic_id		INT(8) NOT NULL AUTO_INCREMENT,
topic_subject  		VARCHAR(255) NOT NULL,
topic_date		DATETIME NOT NULL,
topic_by		INT(8) NOT NULL,
PRIMARY KEY (topic_id)
) TYPE=INNODB;

CREATE TABLE posts (
    post_id 		INT(8) NOT NULL AUTO_INCREMENT,
post_content		TEXT NOT NULL,
post_date 		DATETIME NOT NULL,
post_topic		INT(8) NOT NULL,
post_by		INT(8) NOT NULL,
PRIMARY KEY (post_id)
)

