import {Injectable} from "@angular/core";
import {HttpUtil} from "../util/http.util";


@Injectable()
export class TMenuMockService{
  private baseUrl = "/menu";
  constructor(private httpUtil: HttpUtil){
  }

  getMenuList():Promise<any> {
    return Promise.resolve(this.getJsonResult(this.getMenus()));
  }

  getMenus(){
    let sessionInfo = JSON.parse(localStorage.getItem("sessionInfo"));
    let result;
    if(!sessionInfo.menus){
      sessionInfo.menus = this.menus;
      localStorage.setItem("sessionInfo",JSON.stringify(sessionInfo));
      result = this.menus;
    }else{
      result = sessionInfo.menus;
    }
    return result;
  }

  getMenuTree():Promise<any> {
    let menus = this.getMenus();
    console.log("menus:",JSON.stringify(menus));
    let result = [];
    menus.forEach(function(menu,index,array){
        if(menu.parentId==-1){
          console.log("result:",this.getChildren1(menu,array));
          result.push(this.getChildren1(menu,array));
        }
    },this);
    return Promise.resolve(this.getJsonResult(result));
  }

  getChildren1(menu1,menus){
    menu1.children = [];
    let hasChild = false;
    menus.forEach(function(menu,index,array){
      if(menu.parentId==menu1.id){
        hasChild = true;
        menu1.children.push(this.getChildren1(menu,array));
      }
    },this);

    return menu1;
  }

  add(tMenu:any):Promise<any> {

    let sessionInfo = JSON.parse(localStorage.getItem("sessionInfo"));
    if(tMenu.id){ //修改
      console.log("update:",tMenu);
      sessionInfo.menus = sessionInfo.menus.filter(menu => menu.id!=tMenu.id); //删除
    }else{
      tMenu.id = Math.ceil(Math.random()*10000000);
    }
    sessionInfo.menus.push(tMenu);
    localStorage.setItem("sessionInfo",JSON.stringify(sessionInfo));
    return Promise.resolve(this.getJsonResult(true));
  }



  delete(id:any):Promise<any> {
    let sessionInfo = JSON.parse(localStorage.getItem("sessionInfo"));
    sessionInfo.menus = sessionInfo.menus.filter(menu => menu.id!=id);
    console.log(sessionInfo.menus);
    localStorage.setItem("sessionInfo",JSON.stringify(sessionInfo));
    return Promise.resolve(this.getJsonResult(true));
  }


  getJsonResult(result:any){
    return {data:result,code:0};
  }

  getUserMenu(){
    let url = this.baseUrl+"/user/authorityTree";
    return this.httpUtil.get(url);
  }





  getById(id:number):Promise<any>{
    let menu = this.getMenus().find(menu => menu.id===id);
    console.log("mock:getById:menu=",menu);
    return Promise.resolve(this.getJsonResult(menu));
  }

  private menus:any = [
    {
      "id":1,
      "code":"userManager",
      "title":"用户管理",
      "parentId":5,
      "href":"/index/tUserList",
      "icon":"fa fa-user",
      "orderNum":0,
      "path":"/adminSys/baseManager/userManager",
      "enabled":"Y",
      "createTime":"2017-10-6 15:36:15",
      "updateTime":"2017-10-6 15:36:15"
    },
    {
      "id":5,
      "code":"baseManager",
      "title":"基础配置",
      "parentId":13,
      "href":null,
      "icon":"fa fa-cog",
      "orderNum":0,
      "path":"/adminSys/baseManager",
      "enabled":"Y",
      "createTime":"2017-10-6 15:36:15",
      "updateTime":"2017-10-6 15:36:15"
    },
    {
      "id":6,
      "code":"menuManager",
      "title":"菜单管理",
      "parentId":5,
      "href":"/index/tMenuList",
      "icon":"fa fa-list",
      "orderNum":0,
      "path":"/adminSys/baseManager/menuManager",
      "enabled":"Y",
      "createTime":"2017-10-6 15:36:15",
      "updateTime":"2017-10-6 15:36:15"
    },
    {
      "id":7,
      "code":"groupManager",
      "title":"组织架构管理",
      "parentId":5,
      "href":"/index/tUserGroupList",
      "icon":"fa fa-users",
      "orderNum":0,
      "path":"/adminSys/baseManager/groupManager",
      "enabled":"Y",
      "createTime":"2017-10-6 15:36:15",
      "updateTime":"2017-10-6 15:36:15"
    },
    {
      "id":8,
      "code":"groupTypeManager",
      "title":"组织类型管理",
      "parentId":5,
      "href":"/index/tGroupTypeList",
      "icon":"fa fa-object-group",
      "orderNum":0,
      "path":"/adminSys/baseManager/groupTypeManager",
      "enabled":"Y",
      "createTime":"2017-10-6 15:36:15",
      "updateTime":"2017-10-6 15:36:15"
    },
    {
      "id":9,
      "code":"monitorManager",
      "title":"系统监控",
      "parentId":13,
      "href":null,
      "icon":"fa fa-area-chart",
      "orderNum":0,
      "path":"/adminSys/monitorManager",
      "enabled":"Y",
      "createTime":"2017-10-6 15:36:15",
      "updateTime":"2017-10-6 15:36:15"
    },
    {
      "id":10,
      "code":"bootMonitor",
      "title":"Spring-Boot监控",
      "parentId":9,
      "href":"http://localhost:8764",
      "icon":"fa fa-line-chart",
      "orderNum":0,
      "path":"/adminSys/monitorManager/bootMonitor",
      "enabled":"Y",
      "createTime":"2017-10-6 15:36:15",
      "updateTime":"2017-10-6 15:36:15"
    },
    {
      "id":11,
      "code":"hystrixMonitor",
      "title":"Hystrix监控",
      "parentId":9,
      "href":"http://localhost:8764/hystrix",
      "icon":"fa fa-bar-chart",
      "orderNum":0,
      "path":"/adminSys/monitorManager/hystrixMonitor",
      "enabled":"Y",
      "createTime":"2017-10-6 15:36:15",
      "updateTime":"2017-10-6 15:36:15"
    },
    {
      "id":13,
      "code":"adminSys",
      "title":"权限管理系统",
      "parentId":-1,
      "href":null,
      "icon":"fa fa-terminal",
      "orderNum":0,
      "path":"/adminSys",
      "enabled":"Y",
      "createTime":"2017-10-6 15:36:15",
      "updateTime":"2017-10-6 15:36:15"
    },
    {
      "id":14,
      "code":"contentSys",
      "title":"内容管理系统",
      "parentId":-1,
      "href":null,
      "icon":"fa-newspaper-o",
      "orderNum":0,
      "path":"/contentSys",
      "enabled":"Y",
      "createTime":"2017-10-6 15:36:15",
      "updateTime":"2017-10-6 15:36:15"
    },
    {
      "id":17,
      "code":"articleManger",
      "title":"文章管理",
      "parentId":20,
      "href":null,
      "icon":null,
      "orderNum":0,
      "path":"/contentSys/artComManger/articleManger",
      "enabled":"Y",
      "createTime":"2017-10-6 15:36:15",
      "updateTime":"2017-10-6 15:36:15"
    },
    {
      "id":18,
      "code":"commentManager",
      "title":"评论管理",
      "parentId":20,
      "href":null,
      "icon":null,
      "orderNum":0,
      "path":"/contentSys/artComManger/commentManager",
      "enabled":"Y",
      "createTime":"2017-10-6 15:36:15",
      "updateTime":"2017-10-6 15:36:15"
    },
    {
      "id":20,
      "code":"artComManger",
      "title":"文章评论管理",
      "parentId":14,
      "href":null,
      "icon":"fa fa-bookmark",
      "orderNum":0,
      "path":"/contentSys/artComManger",
      "enabled":"Y",
      "createTime":"2017-10-6 15:36:15",
      "updateTime":"2017-10-6 15:36:15"
    },
    {
      "id":21,
      "code":"dictManager",
      "title":"数据字典",
      "parentId":5,
      "href":"/index/chinaList",
      "icon":"fa fa-book",
      "orderNum":0,
      "path":"/adminSys/baseManager/dictManager",
      "enabled":"Y",
      "createTime":"2017-10-6 15:36:15",
      "updateTime":"2017-10-6 15:36:15"
    },
    {
      "id":22,
      "code":"apiManager",
      "title":"服务端api文档",
      "parentId":13,
      "href":null,
      "icon":"fa fa-folder",
      "orderNum":0,
      "path":"/adminSys/apiManager",
      "enabled":"Y",
      "createTime":"2017-10-6 15:36:15",
      "updateTime":"2017-10-6 15:36:15"
    },
    {
      "id":23,
      "code":"adminAPI",
      "title":"Admin Rest API",
      "parentId":22,
      "href":"/ace-admin/swagger-ui.html",
      "icon":"fa fa-file-code-o",
      "orderNum":0,
      "path":"/adminSys/apiManager/adminAPI",
      "enabled":"Y",
      "createTime":"2017-10-6 15:36:15",
      "updateTime":"2017-10-6 15:36:15"
    },
    {
      "id":24,
      "code":"druidMonitor",
      "title":"Admin Druid数据监控",
      "parentId":9,
      "href":"/ace-admin/druid/datasource.html",
      "icon":"fa fa-line-chart",
      "orderNum":0,
      "path":"/adminSys/monitorManager/druidMonitor",
      "enabled":"Y",
      "createTime":"2017-10-6 15:36:15",
      "updateTime":"2017-10-6 15:36:15"
    }
  ];

}
