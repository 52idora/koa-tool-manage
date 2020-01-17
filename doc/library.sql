/*
SQLyog Ultimate v12.08 (64 bit)
MySQL - 5.7.28-0ubuntu0.18.04.4 : Database - library
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`library` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `library`;

/*Table structure for table `depart` */

CREATE TABLE `depart` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '部门ID',
  `depart_name` varchar(50) DEFAULT NULL COMMENT '部门名',
  `member_num` int(11) DEFAULT '0' COMMENT '部门人数',
  `create_user` int(11) DEFAULT NULL COMMENT '创建人ID',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4;

/*Data for the table `depart` */

insert  into `depart`(`id`,`depart_name`,`member_num`,`create_user`,`create_time`) values (1,'平台解决方案',18,1,'2020-01-09 17:09:38');
insert  into `depart`(`id`,`depart_name`,`member_num`,`create_user`,`create_time`) values (12,'Touch',1,1,'2020-01-14 19:17:48');

/*Table structure for table `sys_user` */

CREATE TABLE `sys_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '管理员ID',
  `email` varchar(50) DEFAULT NULL COMMENT '管理员邮箱',
  `nick_name` varchar(50) DEFAULT NULL COMMENT '管理员昵称',
  `pass` varchar(32) DEFAULT NULL COMMENT '管理员密码',
  `last_login_time` datetime DEFAULT NULL COMMENT '最后登陆时间',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

/*Data for the table `sys_user` */

insert  into `sys_user`(`id`,`email`,`nick_name`,`pass`,`last_login_time`,`create_time`) values (1,'756855220@qq.com','admin','e10adc3949ba59abbe56e057f20f883e','2020-01-16 18:12:01','2020-01-09 17:45:33');

/*Table structure for table `thing` */

CREATE TABLE `thing` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '物品ID',
  `thing_no` varchar(32) DEFAULT NULL COMMENT '物品条形码',
  `thing_name` varchar(100) DEFAULT NULL COMMENT '物品名',
  `thing_img` varchar(100) DEFAULT NULL COMMENT '封面图',
  `thing_type` int(11) DEFAULT NULL COMMENT '分类',
  `total_num` int(11) DEFAULT '0' COMMENT '总数',
  `rest_num` int(11) DEFAULT '0' COMMENT '剩余',
  `borrow_times` int(11) DEFAULT '0' COMMENT '借出次数',
  `remark` text COMMENT '备注',
  `create_user` int(11) DEFAULT NULL COMMENT '创建人',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4;

/*Data for the table `thing` */

insert  into `thing`(`id`,`thing_no`,`thing_name`,`thing_img`,`thing_type`,`total_num`,`rest_num`,`borrow_times`,`remark`,`create_user`,`create_time`) values (7,'9787121321092','Cloud Native Go','undefined',13,1,1,0,'undefined',1,'2020-01-17 11:19:09');
insert  into `thing`(`id`,`thing_no`,`thing_name`,`thing_img`,`thing_type`,`total_num`,`rest_num`,`borrow_times`,`remark`,`create_user`,`create_time`) values (8,'9787121313011','Spring Cloud微服务实战','undefined',5,1,1,0,'undefined',1,'2020-01-17 11:24:17');
insert  into `thing`(`id`,`thing_no`,`thing_name`,`thing_img`,`thing_type`,`total_num`,`rest_num`,`borrow_times`,`remark`,`create_user`,`create_time`) values (9,'9787115397287','MySQL排错指南','undefined',12,1,1,0,'undefined',1,'2020-01-17 11:24:50');
insert  into `thing`(`id`,`thing_no`,`thing_name`,`thing_img`,`thing_type`,`total_num`,`rest_num`,`borrow_times`,`remark`,`create_user`,`create_time`) values (10,'9787121198854','高性能MySQL(第3版)','undefined',12,1,1,0,'undefined',1,'2020-01-17 11:25:34');
insert  into `thing`(`id`,`thing_no`,`thing_name`,`thing_img`,`thing_type`,`total_num`,`rest_num`,`borrow_times`,`remark`,`create_user`,`create_time`) values (11,'9787121135767','疯狂Android讲义','undefined',8,1,1,0,'undefined',1,'2020-01-17 11:26:12');
insert  into `thing`(`id`,`thing_no`,`thing_name`,`thing_img`,`thing_type`,`total_num`,`rest_num`,`borrow_times`,`remark`,`create_user`,`create_time`) values (12,'9787302523925','Robot Framework自动化测试框架核心指南','undefined',10,1,1,0,'undefined',1,'2020-01-17 11:27:52');
insert  into `thing`(`id`,`thing_no`,`thing_name`,`thing_img`,`thing_type`,`total_num`,`rest_num`,`borrow_times`,`remark`,`create_user`,`create_time`) values (13,'9787508355948','CSS权威指南(第三版)','undefined',8,1,1,0,'undefined',1,'2020-01-17 11:28:33');
insert  into `thing`(`id`,`thing_no`,`thing_name`,`thing_img`,`thing_type`,`total_num`,`rest_num`,`borrow_times`,`remark`,`create_user`,`create_time`) values (14,'9787115275790','JavaScript高级程序设计(第3版)','undefined',8,1,1,0,'undefined',1,'2020-01-17 11:29:14');
insert  into `thing`(`id`,`thing_no`,`thing_name`,`thing_img`,`thing_type`,`total_num`,`rest_num`,`borrow_times`,`remark`,`create_user`,`create_time`) values (15,'9787302484929','Vue.js实战','undefined',8,1,1,0,'undefined',1,'2020-01-17 11:29:45');
insert  into `thing`(`id`,`thing_no`,`thing_name`,`thing_img`,`thing_type`,`total_num`,`rest_num`,`borrow_times`,`remark`,`create_user`,`create_time`) values (16,'9787111376613','JavaScript权威指南(第6版)','undefined',8,1,1,0,'undefined',1,'2020-01-17 11:30:23');
insert  into `thing`(`id`,`thing_no`,`thing_name`,`thing_img`,`thing_type`,`total_num`,`rest_num`,`borrow_times`,`remark`,`create_user`,`create_time`) values (17,'9787302308812','HTML5+CSS3从入门到精通','undefined',8,1,1,0,'undefined',1,'2020-01-17 11:32:33');
insert  into `thing`(`id`,`thing_no`,`thing_name`,`thing_img`,`thing_type`,`total_num`,`rest_num`,`borrow_times`,`remark`,`create_user`,`create_time`) values (18,'9787115366535','精通jQuery(第2版)','undefined',8,1,1,0,'undefined',1,'2020-01-17 11:33:09');
insert  into `thing`(`id`,`thing_no`,`thing_name`,`thing_img`,`thing_type`,`total_num`,`rest_num`,`borrow_times`,`remark`,`create_user`,`create_time`) values (19,'9787111250791','CSS,DHTML和Ajax快速上手(原书第4版)','undefined',8,1,1,0,'undefined',1,'2020-01-17 11:34:21');

/*Table structure for table `type` */

CREATE TABLE `type` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '类型ID',
  `parent_id` int(11) DEFAULT '-1' COMMENT '类型父级',
  `type_name` varchar(100) DEFAULT NULL COMMENT '类型名',
  `create_user` int(11) DEFAULT NULL COMMENT '创建人',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4;

/*Data for the table `type` */

insert  into `type`(`id`,`parent_id`,`type_name`,`create_user`,`create_time`) values (4,-1,'书籍',1,'2020-01-14 17:09:22');
insert  into `type`(`id`,`parent_id`,`type_name`,`create_user`,`create_time`) values (5,4,'java类',1,'2020-01-14 17:13:22');
insert  into `type`(`id`,`parent_id`,`type_name`,`create_user`,`create_time`) values (7,-1,'工具',1,'2020-01-14 20:02:55');
insert  into `type`(`id`,`parent_id`,`type_name`,`create_user`,`create_time`) values (8,4,'前端开发',1,'2020-01-16 14:12:25');
insert  into `type`(`id`,`parent_id`,`type_name`,`create_user`,`create_time`) values (9,-1,'消耗品',1,'2020-01-16 14:12:41');
insert  into `type`(`id`,`parent_id`,`type_name`,`create_user`,`create_time`) values (10,4,'测试',1,'2020-01-16 14:13:06');
insert  into `type`(`id`,`parent_id`,`type_name`,`create_user`,`create_time`) values (11,4,'管理',1,'2020-01-16 14:13:26');
insert  into `type`(`id`,`parent_id`,`type_name`,`create_user`,`create_time`) values (12,4,'数据库',1,'2020-01-17 11:15:14');
insert  into `type`(`id`,`parent_id`,`type_name`,`create_user`,`create_time`) values (13,4,'golang',1,'2020-01-17 11:15:39');

/*Table structure for table `use_record` */

CREATE TABLE `use_record` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '借用记录ID',
  `user_id` int(11) DEFAULT NULL COMMENT '借用人',
  `thing_id` int(11) DEFAULT NULL COMMENT '物品ID',
  `state` tinyint(1) DEFAULT '0' COMMENT '0未归还1已归还',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '借用时间',
  `return_time` datetime DEFAULT NULL COMMENT '归还时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;

/*Data for the table `use_record` */

insert  into `use_record`(`id`,`user_id`,`thing_id`,`state`,`create_time`,`return_time`) values (3,5,5,0,'2020-01-16 18:32:55',NULL);
insert  into `use_record`(`id`,`user_id`,`thing_id`,`state`,`create_time`,`return_time`) values (4,5,6,1,'2020-01-16 18:50:22','2020-01-16 19:15:35');
insert  into `use_record`(`id`,`user_id`,`thing_id`,`state`,`create_time`,`return_time`) values (5,5,6,1,'2020-01-16 18:59:23','2020-01-16 19:12:24');
insert  into `use_record`(`id`,`user_id`,`thing_id`,`state`,`create_time`,`return_time`) values (6,5,6,1,'2020-01-16 18:59:27','2020-01-16 19:12:24');
insert  into `use_record`(`id`,`user_id`,`thing_id`,`state`,`create_time`,`return_time`) values (7,5,6,1,'2020-01-16 19:11:52','2020-01-16 19:23:09');
insert  into `use_record`(`id`,`user_id`,`thing_id`,`state`,`create_time`,`return_time`) values (8,5,6,1,'2020-01-16 19:11:56','2020-01-16 19:23:25');

/*Table structure for table `users` */

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户ID',
  `nick_name` varchar(100) NOT NULL COMMENT '用户名',
  `pass` varchar(100) DEFAULT NULL COMMENT '密码',
  `avator` varchar(100) DEFAULT NULL COMMENT '头像',
  `depart_id` int(11) NOT NULL COMMENT '部门ID',
  `create_user` int(11) DEFAULT NULL COMMENT '创建人ID',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '注册时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4;

/*Data for the table `users` */

insert  into `users`(`id`,`nick_name`,`pass`,`avator`,`depart_id`,`create_user`,`create_time`) values (5,'yuanrui',NULL,NULL,1,1,'2020-01-14 20:01:33');
insert  into `users`(`id`,`nick_name`,`pass`,`avator`,`depart_id`,`create_user`,`create_time`) values (6,'zack',NULL,NULL,1,1,'2020-01-15 11:05:19');
insert  into `users`(`id`,`nick_name`,`pass`,`avator`,`depart_id`,`create_user`,`create_time`) values (7,'张科',NULL,NULL,1,1,'2020-01-16 13:32:37');
insert  into `users`(`id`,`nick_name`,`pass`,`avator`,`depart_id`,`create_user`,`create_time`) values (8,'刘欢',NULL,NULL,1,1,'2020-01-16 13:33:47');
insert  into `users`(`id`,`nick_name`,`pass`,`avator`,`depart_id`,`create_user`,`create_time`) values (9,'潘琦',NULL,NULL,1,1,'2020-01-16 13:33:57');
insert  into `users`(`id`,`nick_name`,`pass`,`avator`,`depart_id`,`create_user`,`create_time`) values (10,'何兵兵',NULL,NULL,1,1,'2020-01-16 13:34:06');
insert  into `users`(`id`,`nick_name`,`pass`,`avator`,`depart_id`,`create_user`,`create_time`) values (11,'赵广普',NULL,NULL,1,1,'2020-01-16 13:34:14');
insert  into `users`(`id`,`nick_name`,`pass`,`avator`,`depart_id`,`create_user`,`create_time`) values (12,'王明远',NULL,NULL,1,1,'2020-01-16 13:34:24');
insert  into `users`(`id`,`nick_name`,`pass`,`avator`,`depart_id`,`create_user`,`create_time`) values (13,'李珊珊',NULL,NULL,1,1,'2020-01-16 13:34:35');
insert  into `users`(`id`,`nick_name`,`pass`,`avator`,`depart_id`,`create_user`,`create_time`) values (14,'徐宾灿',NULL,NULL,1,1,'2020-01-16 13:34:46');
insert  into `users`(`id`,`nick_name`,`pass`,`avator`,`depart_id`,`create_user`,`create_time`) values (15,'许子豪',NULL,NULL,1,1,'2020-01-16 13:35:03');
insert  into `users`(`id`,`nick_name`,`pass`,`avator`,`depart_id`,`create_user`,`create_time`) values (16,'张航',NULL,NULL,1,1,'2020-01-16 13:35:12');
insert  into `users`(`id`,`nick_name`,`pass`,`avator`,`depart_id`,`create_user`,`create_time`) values (17,'郭辉',NULL,NULL,1,1,'2020-01-16 13:40:37');
insert  into `users`(`id`,`nick_name`,`pass`,`avator`,`depart_id`,`create_user`,`create_time`) values (18,'胡润东',NULL,NULL,1,1,'2020-01-16 13:40:52');
insert  into `users`(`id`,`nick_name`,`pass`,`avator`,`depart_id`,`create_user`,`create_time`) values (19,'陆小平',NULL,NULL,1,1,'2020-01-16 13:41:48');
insert  into `users`(`id`,`nick_name`,`pass`,`avator`,`depart_id`,`create_user`,`create_time`) values (20,'刘蕾',NULL,NULL,1,1,'2020-01-16 13:42:46');
insert  into `users`(`id`,`nick_name`,`pass`,`avator`,`depart_id`,`create_user`,`create_time`) values (21,'张炎',NULL,NULL,1,1,'2020-01-16 13:42:53');
insert  into `users`(`id`,`nick_name`,`pass`,`avator`,`depart_id`,`create_user`,`create_time`) values (22,'李红俊',NULL,NULL,1,1,'2020-01-16 13:43:04');
insert  into `users`(`id`,`nick_name`,`pass`,`avator`,`depart_id`,`create_user`,`create_time`) values (23,'王洪升',NULL,NULL,12,1,'2020-01-16 19:27:51');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
