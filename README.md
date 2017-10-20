#  **FCat** 
FCat是基于Angular4+SpringCloud的企业级基础功能框架(户权限管理、区域管理、GIS地图、......)，其核心设计目标是分离前后端、开发快速、学习简单、功能强大、不重复造轮子，其目标是帮助企业搭建一套基础功能框架；

- 前端技术：Angular4；
- 后端技术：SpringCloud；

 **QQ群号（1群）：549141844**   

 **演示环境： http://112.74.73.143:4201**  
ps：演示环境用的是fcat-angular-v1分支，由于服务器内存不够，所以只有angular4前端代码，用的模拟数据。前后端分离项目一起部署需要使用master分支。

# 架构设计 
![img](http://on-img.com/chart_image/5954b886e4b0ad619ac73246.png)

## 开发环境
- node-v6.11.0-x64.msi
- redis
- jdk1.8
- mysql
- maven
- IDEA


## 前端项目：fcat-angular

#### 部署
```
安装node-v6.11.0-x64.msi
npm config set registry https://registry.npm.taobao.org
npm install -g @angular/cli

cd FCat\fcat-angular
npm install
```
```
- 后台依次启动：CenterBootstrap、GateBootstrap、UserBootstrap  
- 前端：ng serve --base-href /fcat-angular/  
- 访问： http://localhost:8965
```

##### 功能    
- 项目搭建、架构设计  
- 用户管理     
- 菜单管理  
- 组织类型管理  
- 组织架构管理————组织管理、关联用户、组织授权  
  
 
- 前端效果
![img](http://upload-images.jianshu.io/upload_images/6756205-77654260d96f4a5f.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![img](http://upload-images.jianshu.io/upload_images/6756205-34394cea5f742c60.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![img](http://upload-images.jianshu.io/upload_images/6756205-9d04f049e89ac986.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![img](http://upload-images.jianshu.io/upload_images/6756205-065369a0f34f4cfa.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![img](http://upload-images.jianshu.io/upload_images/6756205-9c372a7abfce3674.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![img](http://upload-images.jianshu.io/upload_images/6756205-ae87eb83261dc2b7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![img](http://upload-images.jianshu.io/upload_images/6756205-5735e4281266cd28.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![img](http://upload-images.jianshu.io/upload_images/6756205-97b82ad220708088.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

