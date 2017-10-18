/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : fcat

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2017-10-18 22:04:17
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for t_authority
-- ----------------------------
DROP TABLE IF EXISTS `t_authority`;
CREATE TABLE `t_authority` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `authority_id` int(11) DEFAULT NULL,
  `authority_type` varchar(255) DEFAULT NULL,
  `resource_id` int(11) DEFAULT NULL,
  `resource_type` varchar(255) DEFAULT NULL,
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP,
  `update_time` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1516 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_authority
-- ----------------------------
INSERT INTO `t_authority` VALUES ('1426', '2', 'group', '13', 'menu', null, null);
INSERT INTO `t_authority` VALUES ('1427', '2', 'group', '5', 'menu', null, null);
INSERT INTO `t_authority` VALUES ('1428', '2', 'group', '7', 'menu', null, null);
INSERT INTO `t_authority` VALUES ('1429', '2', 'group', '8', 'menu', null, null);
INSERT INTO `t_authority` VALUES ('1430', '2', 'group', '21', 'menu', null, null);
INSERT INTO `t_authority` VALUES ('1431', '2', 'group', '13', 'menu', null, null);
INSERT INTO `t_authority` VALUES ('1432', '2', 'group', '5', 'menu', null, null);
INSERT INTO `t_authority` VALUES ('1433', '2', 'group', '1', 'menu', null, null);
INSERT INTO `t_authority` VALUES ('1434', '2', 'group', '7', 'menu', null, null);
INSERT INTO `t_authority` VALUES ('1435', '2', 'group', '8', 'menu', null, null);
INSERT INTO `t_authority` VALUES ('1436', '2', 'group', '21', 'menu', null, null);
INSERT INTO `t_authority` VALUES ('1437', '2', 'group', '13', 'menu', null, null);
INSERT INTO `t_authority` VALUES ('1438', '2', 'group', '5', 'menu', null, null);
INSERT INTO `t_authority` VALUES ('1439', '2', 'group', '1', 'menu', null, null);
INSERT INTO `t_authority` VALUES ('1440', '2', 'group', '7', 'menu', null, null);
INSERT INTO `t_authority` VALUES ('1441', '2', 'group', '8', 'menu', null, null);
INSERT INTO `t_authority` VALUES ('1442', '2', 'group', '21', 'menu', null, null);
INSERT INTO `t_authority` VALUES ('1443', '2', 'group', '13', 'menu', null, null);
INSERT INTO `t_authority` VALUES ('1444', '2', 'group', '5', 'menu', null, null);
INSERT INTO `t_authority` VALUES ('1445', '2', 'group', '1', 'menu', null, null);
INSERT INTO `t_authority` VALUES ('1446', '2', 'group', '7', 'menu', null, null);
INSERT INTO `t_authority` VALUES ('1447', '2', 'group', '8', 'menu', null, null);
INSERT INTO `t_authority` VALUES ('1448', '2', 'group', '21', 'menu', null, null);
INSERT INTO `t_authority` VALUES ('1449', '2', 'group', '13', 'menu', null, null);
INSERT INTO `t_authority` VALUES ('1450', '2', 'group', '5', 'menu', null, null);
INSERT INTO `t_authority` VALUES ('1451', '2', 'group', '1', 'menu', null, null);
INSERT INTO `t_authority` VALUES ('1452', '2', 'group', '7', 'menu', null, null);
INSERT INTO `t_authority` VALUES ('1453', '2', 'group', '8', 'menu', null, null);
INSERT INTO `t_authority` VALUES ('1454', '2', 'group', '21', 'menu', null, null);
INSERT INTO `t_authority` VALUES ('1455', '2', 'group', '14', 'menu', null, null);
INSERT INTO `t_authority` VALUES ('1456', '2', 'group', '33', 'menu', null, null);
INSERT INTO `t_authority` VALUES ('1457', '2', 'group', '34', 'menu', null, null);
INSERT INTO `t_authority` VALUES ('1458', '2', 'group', '35', 'menu', null, null);
INSERT INTO `t_authority` VALUES ('1459', '2', 'group', '13', 'menu', null, null);
INSERT INTO `t_authority` VALUES ('1460', '2', 'group', '5', 'menu', null, null);
INSERT INTO `t_authority` VALUES ('1461', '2', 'group', '1', 'menu', null, null);
INSERT INTO `t_authority` VALUES ('1462', '2', 'group', '6', 'menu', null, null);
INSERT INTO `t_authority` VALUES ('1463', '2', 'group', '7', 'menu', null, null);
INSERT INTO `t_authority` VALUES ('1464', '2', 'group', '8', 'menu', null, null);
INSERT INTO `t_authority` VALUES ('1465', '2', 'group', '21', 'menu', null, null);
INSERT INTO `t_authority` VALUES ('1466', '2', 'group', '14', 'menu', null, null);
INSERT INTO `t_authority` VALUES ('1467', '2', 'group', '33', 'menu', null, null);
INSERT INTO `t_authority` VALUES ('1468', '2', 'group', '34', 'menu', null, null);
INSERT INTO `t_authority` VALUES ('1469', '2', 'group', '35', 'menu', null, null);
INSERT INTO `t_authority` VALUES ('1470', '2', 'group', '13', 'menu', null, null);
INSERT INTO `t_authority` VALUES ('1471', '2', 'group', '5', 'menu', null, null);
INSERT INTO `t_authority` VALUES ('1472', '2', 'group', '1', 'menu', null, null);
INSERT INTO `t_authority` VALUES ('1473', '2', 'group', '6', 'menu', null, null);
INSERT INTO `t_authority` VALUES ('1474', '2', 'group', '7', 'menu', null, null);
INSERT INTO `t_authority` VALUES ('1475', '2', 'group', '8', 'menu', null, null);
INSERT INTO `t_authority` VALUES ('1476', '2', 'group', '21', 'menu', null, null);
INSERT INTO `t_authority` VALUES ('1477', '2', 'group', '14', 'menu', null, null);
INSERT INTO `t_authority` VALUES ('1478', '2', 'group', '33', 'menu', null, null);
INSERT INTO `t_authority` VALUES ('1479', '2', 'group', '34', 'menu', null, null);
INSERT INTO `t_authority` VALUES ('1480', '2', 'group', '35', 'menu', null, null);
INSERT INTO `t_authority` VALUES ('1481', '2', 'group', '13', 'menu', null, null);
INSERT INTO `t_authority` VALUES ('1482', '2', 'group', '5', 'menu', null, null);
INSERT INTO `t_authority` VALUES ('1483', '2', 'group', '1', 'menu', null, null);
INSERT INTO `t_authority` VALUES ('1484', '2', 'group', '6', 'menu', null, null);
INSERT INTO `t_authority` VALUES ('1485', '2', 'group', '7', 'menu', null, null);
INSERT INTO `t_authority` VALUES ('1486', '2', 'group', '8', 'menu', null, null);
INSERT INTO `t_authority` VALUES ('1487', '2', 'group', '21', 'menu', null, null);
INSERT INTO `t_authority` VALUES ('1488', '2', 'group', '14', 'menu', null, null);
INSERT INTO `t_authority` VALUES ('1489', '2', 'group', '33', 'menu', null, null);
INSERT INTO `t_authority` VALUES ('1490', '2', 'group', '34', 'menu', null, null);
INSERT INTO `t_authority` VALUES ('1491', '2', 'group', '35', 'menu', null, null);
INSERT INTO `t_authority` VALUES ('1492', '2', 'group', '3', 'element', null, null);
INSERT INTO `t_authority` VALUES ('1493', '2', 'group', '4', 'element', null, null);
INSERT INTO `t_authority` VALUES ('1494', '2', 'group', '5', 'element', null, null);
INSERT INTO `t_authority` VALUES ('1495', '2', 'group', '23', 'element', null, null);
INSERT INTO `t_authority` VALUES ('1496', '2', 'group', '10', 'element', null, null);
INSERT INTO `t_authority` VALUES ('1497', '2', 'group', '11', 'element', null, null);
INSERT INTO `t_authority` VALUES ('1498', '2', 'group', '12', 'element', null, null);
INSERT INTO `t_authority` VALUES ('1499', '2', 'group', '13', 'element', null, null);
INSERT INTO `t_authority` VALUES ('1500', '2', 'group', '14', 'element', null, null);
INSERT INTO `t_authority` VALUES ('1501', '2', 'group', '15', 'element', null, null);
INSERT INTO `t_authority` VALUES ('1502', '2', 'group', '24', 'element', null, null);
INSERT INTO `t_authority` VALUES ('1503', '2', 'group', '27', 'element', null, null);
INSERT INTO `t_authority` VALUES ('1504', '2', 'group', '16', 'element', null, null);
INSERT INTO `t_authority` VALUES ('1505', '2', 'group', '17', 'element', null, null);
INSERT INTO `t_authority` VALUES ('1506', '2', 'group', '18', 'element', null, null);
INSERT INTO `t_authority` VALUES ('1507', '2', 'group', '19', 'element', null, null);
INSERT INTO `t_authority` VALUES ('1508', '2', 'group', '20', 'element', null, null);
INSERT INTO `t_authority` VALUES ('1509', '2', 'group', '21', 'element', null, null);
INSERT INTO `t_authority` VALUES ('1510', '2', 'group', '22', 'element', null, null);
INSERT INTO `t_authority` VALUES ('1511', '2', 'group', '28', 'element', null, null);
INSERT INTO `t_authority` VALUES ('1512', '2', 'group', '32', 'element', null, null);
INSERT INTO `t_authority` VALUES ('1513', '2', 'group', '33', 'element', null, null);
INSERT INTO `t_authority` VALUES ('1514', '2', 'group', '34', 'element', null, null);
INSERT INTO `t_authority` VALUES ('1515', '2', 'group', '35', 'element', null, null);

-- ----------------------------
-- Table structure for t_element
-- ----------------------------
DROP TABLE IF EXISTS `t_element`;
CREATE TABLE `t_element` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `uri` varchar(255) DEFAULT NULL,
  `menu_id` int(11) DEFAULT NULL,
  `parent_id` int(11) DEFAULT NULL,
  `path` varchar(2000) DEFAULT NULL,
  `method` varchar(10) DEFAULT NULL,
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP,
  `update_time` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_element
-- ----------------------------
INSERT INTO `t_element` VALUES ('3', 'userManager:btn_add', 'button', '新增', '/fcat-user/user', '1', null, null, 'POST', '2017-10-06 15:24:15', '2017-10-06 15:24:15');
INSERT INTO `t_element` VALUES ('4', 'userManager:btn_edit', 'button', '编辑', '/fcat-user/user', '1', null, null, 'PUT', '2017-10-06 15:24:15', '2017-10-06 15:24:15');
INSERT INTO `t_element` VALUES ('5', 'userManager:btn_del', 'button', '删除', '/fcat-user/user', '1', null, null, 'DELETE', '2017-10-06 15:24:15', '2017-10-06 15:24:15');
INSERT INTO `t_element` VALUES ('10', 'menuManager:btn_add', 'button', '新增', '/fcat-user/menu', '6', null, null, 'POST', '2017-10-06 15:24:15', '2017-10-06 15:24:15');
INSERT INTO `t_element` VALUES ('11', 'menuManager:btn_edit', 'button', '编辑', '/fcat-user/menu', '6', '0', '', 'PUT', '2017-10-06 15:24:15', '2017-10-06 15:24:15');
INSERT INTO `t_element` VALUES ('12', 'menuManager:btn_del', 'button', '删除', '/fcat-user/menu', '6', '0', '', 'DELETE', '2017-10-06 15:24:15', '2017-10-06 15:24:15');
INSERT INTO `t_element` VALUES ('13', 'menuManager:btn_element_add', 'button', '新增元素', '/fcat-user/element', '6', null, null, 'POST', '2017-10-06 15:24:15', '2017-10-06 15:24:15');
INSERT INTO `t_element` VALUES ('14', 'menuManager:btn_element_edit', 'button', '编辑元素', '/fcat-user/element', '6', null, null, 'PUT', '2017-10-06 15:24:15', '2017-10-06 15:24:15');
INSERT INTO `t_element` VALUES ('15', 'btn_element_del', 'button', '删除元素', '/fcat-user/element', '6', null, null, 'DELETE', '2017-10-06 15:24:15', '2017-10-06 15:24:15');
INSERT INTO `t_element` VALUES ('16', 'groupManager:btn_add', 'button', '新增', '/fcat-user/group', '7', null, null, 'POST', '2017-10-06 15:24:15', '2017-10-06 15:24:15');
INSERT INTO `t_element` VALUES ('17', 'groupManager:btn_edit', 'button', '编辑', '/fcat-user/group', '7', null, null, 'PUT', '2017-10-06 15:24:15', '2017-10-06 15:24:15');
INSERT INTO `t_element` VALUES ('18', 'groupManager:btn_del', 'button', '删除', '/fcat-user/group', '7', null, null, 'DELETE', '2017-10-06 15:24:15', '2017-10-06 15:24:15');
INSERT INTO `t_element` VALUES ('19', 'groupManager:btn_userManager', 'button', '分配用户', '/fcat-user/group/{*}/user', '7', null, null, 'PUT', '2017-10-06 15:24:15', '2017-10-06 15:24:15');
INSERT INTO `t_element` VALUES ('20', 'groupManager:btn_resourceManager', 'button', '分配权限', '/fcat-user/group/{*}/authority', '7', null, null, 'GET', '2017-10-06 15:24:15', '2017-10-06 15:24:15');
INSERT INTO `t_element` VALUES ('21', 'groupManager:menu', 'uri', '分配菜单', '/fcat-user/group/{*}/authority/menu', '7', null, null, 'POST', '2017-10-06 15:24:15', '2017-10-06 15:24:15');
INSERT INTO `t_element` VALUES ('22', 'groupManager:element', 'uri', '分配资源', '/fcat-user/group/{*}/authority/element', '7', null, null, 'POST', '2017-10-06 15:24:15', '2017-10-06 15:24:15');
INSERT INTO `t_element` VALUES ('23', 'userManager:view', 'uri', '查看', '/fcat-user/user', '1', '0', '', 'GET', '2017-10-06 15:24:15', '2017-10-06 15:24:15');
INSERT INTO `t_element` VALUES ('24', 'menuManager:view', 'uri', '查看', '/fcat-user/menu', '6', '0', '', 'GET', '2017-10-06 15:24:15', '2017-10-06 15:24:15');
INSERT INTO `t_element` VALUES ('27', 'menuManager:element_view', 'uri', '查看', '/fcat-user/element', '6', null, null, 'GET', '2017-10-06 15:24:15', '2017-10-06 15:24:15');
INSERT INTO `t_element` VALUES ('28', 'groupManager:view', 'uri', '查看', '/fcat-user/group', '7', null, null, 'GET', '2017-10-06 15:24:15', '2017-10-06 15:24:15');
INSERT INTO `t_element` VALUES ('30', 'adminAPI:view', 'uri', '查看', '/fcat-user/swagger', '23', null, null, 'GET', '2017-10-06 15:24:15', '2017-10-06 15:24:15');
INSERT INTO `t_element` VALUES ('31', 'adminAPI:swagger', 'uri', '查看', '/fcat-user/v2', '23', null, null, 'GET', '2017-10-06 15:24:15', '2017-10-06 15:24:15');
INSERT INTO `t_element` VALUES ('32', 'groupTypeManager:view', 'uri', '查看', '/fcat-user/groupType', '8', null, null, 'GET', '2017-10-06 15:24:15', '2017-10-06 15:24:15');
INSERT INTO `t_element` VALUES ('33', 'groupTypeManager:btn_add', 'button', '新增', '/fcat-user/groupType', '8', null, null, 'POST', '2017-10-06 15:24:15', '2017-10-06 15:24:15');
INSERT INTO `t_element` VALUES ('34', 'groupTypeManager:btn_edit', 'button', '编辑', '/fcat-user/groupType', '8', null, null, 'PUT', '2017-10-06 15:24:15', '2017-10-06 15:24:15');
INSERT INTO `t_element` VALUES ('35', 'groupTypeManager:btn_del', 'button', '删除', '/fcat-user/groupType', '8', null, null, 'DELETE', '2017-10-06 15:24:15', '2017-10-06 15:24:15');

-- ----------------------------
-- Table structure for t_group
-- ----------------------------
DROP TABLE IF EXISTS `t_group`;
CREATE TABLE `t_group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `parent_id` int(11) DEFAULT NULL,
  `path` varchar(2000) DEFAULT NULL,
  `group_type_id` int(11) NOT NULL,
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP,
  `update_time` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_group
-- ----------------------------
INSERT INTO `t_group` VALUES ('1', 'role', '角色', '-1', '/role', '1', '2017-10-12 13:14:13', '2017-10-12 13:14:13');
INSERT INTO `t_group` VALUES ('2', 'superAdmin', '超级管理员', '1', '/role/superAdmin', '1', '2017-10-06 21:29:40', '2017-10-06 21:29:40');
INSERT INTO `t_group` VALUES ('4', 'tourist', '游客', '1', '/role/tourist', '1', '2017-10-06 21:29:40', '2017-10-06 21:29:40');
INSERT INTO `t_group` VALUES ('6', 'company', '深圳华为技术有限公司', '-1', '/company', '2', '2017-10-06 21:29:40', '2017-10-06 21:29:40');
INSERT INTO `t_group` VALUES ('7', 'financeDepart', '财务部', '6', '/company/financeDepart', '2', '2017-10-06 21:29:40', '2017-10-06 21:29:40');
INSERT INTO `t_group` VALUES ('8', 'hrDepart', '人力资源部', '6', '/company/hrDepart', '2', '2017-10-06 21:29:40', '2017-10-06 21:29:40');

-- ----------------------------
-- Table structure for t_group_type
-- ----------------------------
DROP TABLE IF EXISTS `t_group_type`;
CREATE TABLE `t_group_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(255) DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 DEFAULT NULL,
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP,
  `update_time` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_group_type
-- ----------------------------
INSERT INTO `t_group_type` VALUES ('1', 'role', '角色类型', '2017-10-06 14:49:11', '2017-10-06 14:49:11');
INSERT INTO `t_group_type` VALUES ('2', 'depart', '部门类型', '2017-10-06 14:49:11', '2017-10-06 14:49:11');
INSERT INTO `t_group_type` VALUES ('3', 'custom', '自定义类型', '2017-10-06 14:49:11', '2017-10-06 14:49:11');

-- ----------------------------
-- Table structure for t_menu
-- ----------------------------
DROP TABLE IF EXISTS `t_menu`;
CREATE TABLE `t_menu` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `parent_id` int(11) NOT NULL,
  `href` varchar(255) DEFAULT NULL,
  `icon` varchar(255) DEFAULT NULL,
  `order_num` int(11) NOT NULL DEFAULT '0',
  `path` varchar(500) DEFAULT NULL,
  `enabled` char(1) DEFAULT 'Y',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP,
  `update_time` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_menu
-- ----------------------------
INSERT INTO `t_menu` VALUES ('1', 'userManager', '用户管理', '5', '/index/tUserList', 'fa fa-user', '0', '/adminSys/baseManager/userManager', 'Y', '2017-10-06 15:36:15', '2017-10-06 15:36:15');
INSERT INTO `t_menu` VALUES ('5', 'baseManager', '基础配置', '13', null, 'fa fa-cog', '0', '/adminSys/baseManager', 'Y', '2017-10-06 15:36:15', '2017-10-06 15:36:15');
INSERT INTO `t_menu` VALUES ('6', 'menuManager', '菜单管理', '5', '/index/tMenuList', 'fa fa-list', '0', '/adminSys/baseManager/menuManager', 'Y', '2017-10-06 15:36:15', '2017-10-06 15:36:15');
INSERT INTO `t_menu` VALUES ('7', 'groupManager', '组织架构管理', '5', '/index/tGroupList', 'fa fa-users', '0', '/adminSys/baseManager/groupManager', 'Y', '2017-10-06 15:36:15', '2017-10-06 15:36:15');
INSERT INTO `t_menu` VALUES ('8', 'groupTypeManager', '组织类型管理', '5', '/index/tGroupTypeList', 'fa fa-object-group', '0', '/adminSys/baseManager/groupTypeManager', 'Y', '2017-10-06 15:36:15', '2017-10-06 15:36:15');
INSERT INTO `t_menu` VALUES ('13', 'adminSys', '权限管理系统', '-1', null, 'fa fa-terminal', '0', '/adminSys', 'Y', '2017-10-06 15:36:15', '2017-10-06 15:36:15');
INSERT INTO `t_menu` VALUES ('14', 'contentSys', '区域管理系统', '-1', null, 'fa-newspaper-o', '0', '/contentSys', 'Y', '2017-10-06 15:36:15', '2017-10-06 15:36:15');
INSERT INTO `t_menu` VALUES ('21', 'dictManager', '数据字典', '5', '/index/dictList', 'fa fa-book', '0', '/adminSys/baseManager/dictManager', 'Y', '2017-10-06 15:36:15', '2017-10-06 15:36:15');
INSERT INTO `t_menu` VALUES ('33', 'areaManager', '区域管理', '14', null, 'fa fa-map-o', '0', null, 'Y', '2017-10-17 21:44:03', '2017-10-17 21:44:03');
INSERT INTO `t_menu` VALUES ('34', 'country', '国家', '33', '/index/dictList', 'fa fa-clone', '0', null, 'Y', '2017-10-17 21:46:21', '2017-10-17 21:46:21');
INSERT INTO `t_menu` VALUES ('35', 'province', '省会', '33', '/index/dictList', 'fa  fa-film', '0', null, 'Y', '2017-10-17 21:49:49', '2017-10-17 21:49:49');

-- ----------------------------
-- Table structure for t_user
-- ----------------------------
DROP TABLE IF EXISTS `t_user`;
CREATE TABLE `t_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `birthday` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `mobile_phone` varchar(255) NOT NULL,
  `tel_phone` varchar(255) DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 DEFAULT NULL,
  `sex` char(1) DEFAULT 'S' COMMENT '''F''-女，''M''-男，''S''-保密',
  `status` char(1) DEFAULT 'Y' COMMENT '''Y''-激活，''N''-未激活，''D''-已删除',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP,
  `update_time` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_user
-- ----------------------------
INSERT INTO `t_user` VALUES ('1', 'xiaoliu', '123456', '小刘', '1991-02-11', '广东省深圳市福田', '13025442101', '07997287924', 'xiaoliu@163.com', 'M', 'Y', '2017-10-06 14:40:36', '2017-10-06 14:40:36');
INSERT INTO `t_user` VALUES ('2', 'aki', '123456', '阿沂', '1989-02-11', '广东省省长市水斗村', '13430932112', '07997287923', 'aki@163.com', 'F', 'Y', '2017-10-06 14:40:36', '2017-10-06 14:40:36');
INSERT INTO `t_user` VALUES ('3', 'xiaoxiong', '123456', '小熊', '1995-02-11', '广东省深圳市宝安', '13225442101', '07997287922', 'xiaoxiong@163.com', 'M', 'Y', '2017-10-06 14:40:36', '2017-10-06 14:40:36');
INSERT INTO `t_user` VALUES ('4', 'xiaofei', '123456', '小飞', '1992-02-11', '广东省深圳市盐田', '13225442101', '07997287922', 'xiaofei@163.com', 'M', 'Y', '2017-10-08 16:15:59', '2017-10-08 16:15:59');
INSERT INTO `t_user` VALUES ('5', 'xiaoxiang', '123456', '小翔', '1992-02-11', '广东省深圳市盐田', '13225442103', '07997287923', 'xiaoxiang@163.com', 'S', 'Y', '2017-10-17 17:55:24', '2017-10-17 17:55:24');
INSERT INTO `t_user` VALUES ('7', '18925231121', '1', '2', '1', '1', '1', '1', '1', 'S', 'Y', '2017-10-17 18:18:59', '2017-10-17 18:18:59');

-- ----------------------------
-- Table structure for t_user_group
-- ----------------------------
DROP TABLE IF EXISTS `t_user_group`;
CREATE TABLE `t_user_group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `group_id` int(255) DEFAULT NULL,
  `user_id` int(255) DEFAULT NULL,
  `type` varchar(20) DEFAULT 'member' COMMENT '''member''-成员，''leader''-领导',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP,
  `update_time` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_user_group
-- ----------------------------
INSERT INTO `t_user_group` VALUES ('15', '4', '2', 'leader', '2017-10-06 14:45:03', '2017-10-06 14:45:03');
INSERT INTO `t_user_group` VALUES ('19', '1', '1', 'member', '2017-10-06 14:45:03', '2017-10-06 14:45:03');
