CREATE TABLE `tb_user` (
	`id_user` bigint NOT NULL AUTO_INCREMENT,
	`user_name` varchar(50) NOT NULL,
	`pass_word` varchar(50) NOT NULL,
	`email` varchar(50) NOT NULL,
	PRIMARY KEY (`id_user`)
);

CREATE TABLE `tb_post` (
	`id_post` bigint NOT NULL AUTO_INCREMENT,
	`title` varchar(255) NOT NULL,
	`description` varchar(255) NOT NULL,
	`date` DATETIME(50) NOT NULL,
	`author` varchar(100) NOT NULL,
	`fk_id_user` bigint NOT NULL,
	`fk_id_theme` bigint NOT NULL,
	PRIMARY KEY (`id_post`)
);

CREATE TABLE `tb_theme` (
	`id_theme` bigint NOT NULL AUTO_INCREMENT,
	`title` varchar(20) NOT NULL,
	`description` varchar(40) NOT NULL,
	`fk_id_post` bigint NOT NULL,
	PRIMARY KEY (`id_theme`)
);

ALTER TABLE `tb_post` ADD CONSTRAINT `tb_post_fk0` FOREIGN KEY (`fk_id_user`) REFERENCES `tb_user`(`id_user`);

ALTER TABLE `tb_post` ADD CONSTRAINT `tb_post_fk1` FOREIGN KEY (`fk_id_theme`) REFERENCES `tb_theme`(`id_theme`);

ALTER TABLE `tb_theme` ADD CONSTRAINT `tb_theme_fk0` FOREIGN KEY (`fk_id_post`) REFERENCES `tb_post`(`id_post`);




