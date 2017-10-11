# FCat
FCat是基于Angular4+SpringCloud用户权限系统管理框架，其核心设计目标是分离前后端、开发快速、学习简单、功能强大、不重复造轮子；
- 前端技术：Angular4；
- 后端技术：SpringCloud；

## Angular4环境搭建
- 1、安装node  
去官网下载：http://nodejs.cn/download/下载相应的版本；  
运行下载文件node-v8.0.0-x64.msi安装node，默认一步一步执行  
- 2、设置npm的镜像  
```
$npm config set registry https://registry.npm.taobao.org
```
- 3、安装全局angular-cli
```
$ npm install -g @angular/cli
```

- 4、启动项目
```
cd 项目下载路径
cd FCat\fcat-angular
npm install
ng server --open
```