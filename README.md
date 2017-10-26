#  **FCat** 
FCat是基于Angular4+SpringCloud的企业级基础功能框架(户权限管理、区域管理、GIS地图、......)，其核心设计目标是分离前后端、开发快速、学习简单、功能强大、不重复造轮子，其目标是帮助企业搭建一套基础功能框架；

- 前端技术：Angular4；
- 后端技术：SpringCloud；

 **QQ群号（1群）：549141844**   

[^_^]

# 架构设计 
![img](http://on-img.com/chart_image/5954b886e4b0ad619ac73246.png)

## 开发环境
- node-v6.11.0-x64.msi
- redis
- jdk1.8
- mysql
- maven
- IDEA



#### 部署
```
安装node-v6.11.0-x64.msi
npm config set registry https://registry.npm.taobao.org
npm install -g @angular/cli

cd FCat\fcat-angular
npm install
```
#### 使用master分支——默认CORS解决跨域问题
``` 
- 后台依次启动：CenterBootstrap、GateBootstrap、UserBootstrap 
- 前端：ng serve --base-href 
- 访问： http://localhost:4200 
```

#### 使用master分支——nginx做转发
nginx.conf配置
```
worker_processes  1;
events {
    worker_connections  1024;
}
http {
    include       mime.types;
    default_type  application/octet-stream;
    sendfile        on;
    keepalive_timeout  65;
    server {
        listen       80;
		server_name  localhost:4200; 
        location / {
            proxy_pass   http://localhost:4200;
        } 
		location /apis {
			rewrite    ^.+apis/?(.*)$ /$1 break;
		    proxy_pass   http://localhost:8965;
        }
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }
}
```
将fcat-angular/src/app/app-config.ts 文件中的baseUrl的值"http://localhost:8965"修改为"/apis"

#### 使用fcat-v1分支
``` 
- 后台依次启动：CenterBootstrap、GateBootstrap、UserBootstrap 
- 前端：ng serve --base-href /fcat-angular/  
- 访问： http://localhost:8965 
```

#### 使用fcat-angular分支 
``` 
- 前端：ng serve --base-href  
- 访问： http://localhost:4200
```


##### 功能    
- 项目搭建、架构设计  
- 用户管理     
- 菜单管理  
- 组织类型管理  
- 组织架构管理————组织管理、关联用户、组织授权  
  
 
## 前端效果
![img](http://upload-images.jianshu.io/upload_images/6756205-6407580dc46eb227.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![img](http://upload-images.jianshu.io/upload_images/6756205-aaa3421a65982aad.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![img](http://upload-images.jianshu.io/upload_images/6756205-3ef6ab8d6760bfc9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![img](http://upload-images.jianshu.io/upload_images/6756205-b28990f4e8dd1e0e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![img](http://upload-images.jianshu.io/upload_images/6756205-2354fc7cdebf2089.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)