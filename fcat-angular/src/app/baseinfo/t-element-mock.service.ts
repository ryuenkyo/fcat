import {Injectable} from "@angular/core";
import {HttpUtil} from "../util/http.util";
import {TElement} from "./t-element";


@Injectable()
export class TElementMockService{
  private baseUrl = "/element";
  constructor(private httpUtil: HttpUtil){
  }

  getElementByPage(menuId:number) {
    let param = "?limit=100&offset=0&menuId="+menuId;
    let url = this.baseUrl+"/page"+param;
    return this.httpUtil.get(url);
  }
  getJsonResult(result:any){
    return {data:result,code:0};
  }

  getElementByMenuId(menuId:number):Promise<any> {
    console.log("menuId:",menuId);
    console.log("elements:",this.getElements());
    let elements = this.getElements().filter(element => element.menuId === menuId);
    console.log("elements:",elements);
    return Promise.resolve(this.getJsonResult(elements));
  }

  getElements() {
    let sessionInfo = JSON.parse(localStorage.getItem("sessionInfo"));
    let result;
    console.log("======",sessionInfo);
    if(!sessionInfo.elements){
      sessionInfo.elements = this.elements;
      localStorage.setItem("sessionInfo",JSON.stringify(sessionInfo));
      result = this.elements;
    }else{
      result = sessionInfo.elements;
    }
    return result;
  }


  getElementList(): Promise<any> {
  return Promise.resolve(this.getJsonResult(this.getElements()));
  }

  delete(id:any):Promise<any> {
    let sessionInfo = JSON.parse(localStorage.getItem("sessionInfo"));
    sessionInfo.elements = sessionInfo.elements.filter(element => element.id!=id);
    console.log(sessionInfo.elements);
    localStorage.setItem("sessionInfo",JSON.stringify(sessionInfo));
    return Promise.resolve(this.getJsonResult(true));
  }

  add(tElement:TElement):Promise<any> {
    let sessionInfo = JSON.parse(localStorage.getItem("sessionInfo"));
    if(tElement.id){ //修改
      console.log("update:",tElement);
      sessionInfo.elements = sessionInfo.elements.filter(element => element.id!=tElement.id); //删除
    }else{
      tElement.id = Math.ceil(Math.random()*10000000);
    }
    sessionInfo.elements.push(tElement);
    localStorage.setItem("sessionInfo",JSON.stringify(sessionInfo));
    return Promise.resolve(this.getJsonResult(true));
  }

  getById(id:number):Promise<any>{
    let element = this.getElements().find(element => element.id===id);
    console.log("mock:getById:element=",element);
    return Promise.resolve(this.getJsonResult(element));
  }

  private elements:any = [
    {
      "id":3,
      "code":"userManager:btn_add",
      "type":"button",
      "name":"新增",
      "uri":"/userAdmin/user",
      "menuId":1,
      "parent_id":null,
      "path":null,
      "method":"POST",
      "create_time":"2017-10-6 15:24:15",
      "update_time":"2017-10-6 15:24:15"
    },
    {
      "id":4,
      "code":"userManager:btn_edit",
      "type":"button",
      "name":"编辑",
      "uri":"/userAdmin/user",
      "menuId":1,
      "parent_id":null,
      "path":null,
      "method":"PUT",
      "create_time":"2017-10-6 15:24:15",
      "update_time":"2017-10-6 15:24:15"
    },
    {
      "id":5,
      "code":"userManager:btn_del",
      "type":"button",
      "name":"删除",
      "uri":"/userAdmin/user",
      "menuId":1,
      "parent_id":null,
      "path":null,
      "method":"DELETE",
      "create_time":"2017-10-6 15:24:15",
      "update_time":"2017-10-6 15:24:15"
    },
    {
      "id":10,
      "code":"menuManager:btn_add",
      "type":"button",
      "name":"新增",
      "uri":"/userAdmin/menu",
      "menuId":6,
      "parent_id":null,
      "path":null,
      "method":"POST",
      "create_time":"2017-10-6 15:24:15",
      "update_time":"2017-10-6 15:24:15"
    },
    {
      "id":11,
      "code":"menuManager:btn_edit",
      "type":"button",
      "name":"编辑",
      "uri":"/userAdmin/menu",
      "menuId":6,
      "parent_id":null,
      "path":null,
      "method":"PUT",
      "create_time":"2017-10-6 15:24:15",
      "update_time":"2017-10-6 15:24:15"
    },
    {
      "id":12,
      "code":"menuManager:btn_del",
      "type":"button",
      "name":"删除",
      "uri":"/userAdmin/menu",
      "menuId":6,
      "parent_id":null,
      "path":null,
      "method":"DELETE",
      "create_time":"2017-10-6 15:24:15",
      "update_time":"2017-10-6 15:24:15"
    },
    {
      "id":13,
      "code":"menuManager:btn_element_add",
      "type":"button",
      "name":"新增元素",
      "uri":"/userAdmin/element",
      "menuId":6,
      "parent_id":null,
      "path":null,
      "method":"POST",
      "create_time":"2017-10-6 15:24:15",
      "update_time":"2017-10-6 15:24:15"
    },
    {
      "id":14,
      "code":"menuManager:btn_element_edit",
      "type":"button",
      "name":"编辑元素",
      "uri":"/userAdmin/element",
      "menuId":6,
      "parent_id":null,
      "path":null,
      "method":"PUT",
      "create_time":"2017-10-6 15:24:15",
      "update_time":"2017-10-6 15:24:15"
    },
    {
      "id":15,
      "code":"btn_element_del",
      "type":"button",
      "name":"删除元素",
      "uri":"/userAdmin/element",
      "menuId":6,
      "parent_id":null,
      "path":null,
      "method":"DELETE",
      "create_time":"2017-10-6 15:24:15",
      "update_time":"2017-10-6 15:24:15"
    },
    {
      "id":16,
      "code":"groupManager:btn_add",
      "type":"button",
      "name":"新增",
      "uri":"/userAdmin/group",
      "menuId":7,
      "parent_id":null,
      "path":null,
      "method":"POST",
      "create_time":"2017-10-6 15:24:15",
      "update_time":"2017-10-6 15:24:15"
    },
    {
      "id":17,
      "code":"groupManager:btn_edit",
      "type":"button",
      "name":"编辑",
      "uri":"/userAdmin/group",
      "menuId":7,
      "parent_id":null,
      "path":null,
      "method":"PUT",
      "create_time":"2017-10-6 15:24:15",
      "update_time":"2017-10-6 15:24:15"
    },
    {
      "id":18,
      "code":"groupManager:btn_del",
      "type":"button",
      "name":"删除",
      "uri":"/userAdmin/group",
      "menuId":7,
      "parent_id":null,
      "path":null,
      "method":"DELETE",
      "create_time":"2017-10-6 15:24:15",
      "update_time":"2017-10-6 15:24:15"
    },
    {
      "id":19,
      "code":"groupManager:btn_userManager",
      "type":"button",
      "name":"分配用户",
      "uri":"/userAdmin/group/{*}/user",
      "menuId":7,
      "parent_id":null,
      "path":null,
      "method":"PUT",
      "create_time":"2017-10-6 15:24:15",
      "update_time":"2017-10-6 15:24:15"
    },
    {
      "id":20,
      "code":"groupManager:btn_resourceManager",
      "type":"button",
      "name":"分配权限",
      "uri":"/userAdmin/group/{*}/authority",
      "menuId":7,
      "parent_id":null,
      "path":null,
      "method":"GET",
      "create_time":"2017-10-6 15:24:15",
      "update_time":"2017-10-6 15:24:15"
    },
    {
      "id":21,
      "code":"groupManager:menu",
      "type":"uri",
      "name":"分配菜单",
      "uri":"/userAdmin/group/{*}/authority/menu",
      "menuId":7,
      "parent_id":null,
      "path":null,
      "method":"POST",
      "create_time":"2017-10-6 15:24:15",
      "update_time":"2017-10-6 15:24:15"
    },
    {
      "id":22,
      "code":"groupManager:element",
      "type":"uri",
      "name":"分配资源",
      "uri":"/userAdmin/group/{*}/authority/element",
      "menuId":7,
      "parent_id":null,
      "path":null,
      "method":"POST",
      "create_time":"2017-10-6 15:24:15",
      "update_time":"2017-10-6 15:24:15"
    },
    {
      "id":23,
      "code":"userManager:view",
      "type":"uri",
      "name":"查看",
      "uri":"/userAdmin/user",
      "menuId":1,
      "parent_id":null,
      "path":null,
      "method":"GET",
      "create_time":"2017-10-6 15:24:15",
      "update_time":"2017-10-6 15:24:15"
    },
    {
      "id":24,
      "code":"menuManager:view",
      "type":"uri",
      "name":"查看",
      "uri":"/userAdmin/menu",
      "menuId":6,
      "parent_id":null,
      "path":null,
      "method":"GET",
      "create_time":"2017-10-6 15:24:15",
      "update_time":"2017-10-6 15:24:15"
    },
    {
      "id":27,
      "code":"menuManager:element_view",
      "type":"uri",
      "name":"查看",
      "uri":"/userAdmin/element",
      "menuId":6,
      "parent_id":null,
      "path":null,
      "method":"GET",
      "create_time":"2017-10-6 15:24:15",
      "update_time":"2017-10-6 15:24:15"
    },
    {
      "id":28,
      "code":"groupManager:view",
      "type":"uri",
      "name":"查看",
      "uri":"/userAdmin/group",
      "menuId":7,
      "parent_id":null,
      "path":null,
      "method":"GET",
      "create_time":"2017-10-6 15:24:15",
      "update_time":"2017-10-6 15:24:15"
    },
    {
      "id":30,
      "code":"adminAPI:view",
      "type":"uri",
      "name":"查看",
      "uri":"/userAdmin/swagger",
      "menuId":23,
      "parent_id":null,
      "path":null,
      "method":"GET",
      "create_time":"2017-10-6 15:24:15",
      "update_time":"2017-10-6 15:24:15"
    },
    {
      "id":31,
      "code":"adminAPI:swagger",
      "type":"uri",
      "name":"查看",
      "uri":"/userAdmin/v2",
      "menuId":23,
      "parent_id":null,
      "path":null,
      "method":"GET",
      "create_time":"2017-10-6 15:24:15",
      "update_time":"2017-10-6 15:24:15"
    },
    {
      "id":32,
      "code":"groupTypeManager:view",
      "type":"uri",
      "name":"查看",
      "uri":"/userAdmin/groupType",
      "menuId":8,
      "parent_id":null,
      "path":null,
      "method":"GET",
      "create_time":"2017-10-6 15:24:15",
      "update_time":"2017-10-6 15:24:15"
    },
    {
      "id":33,
      "code":"groupTypeManager:btn_add",
      "type":"button",
      "name":"新增",
      "uri":"/userAdmin/groupType",
      "menuId":8,
      "parent_id":null,
      "path":null,
      "method":"POST",
      "create_time":"2017-10-6 15:24:15",
      "update_time":"2017-10-6 15:24:15"
    },
    {
      "id":34,
      "code":"groupTypeManager:btn_edit",
      "type":"button",
      "name":"编辑",
      "uri":"/userAdmin/groupType",
      "menuId":8,
      "parent_id":null,
      "path":null,
      "method":"PUT",
      "create_time":"2017-10-6 15:24:15",
      "update_time":"2017-10-6 15:24:15"
    },
    {
      "id":35,
      "code":"groupTypeManager:btn_del",
      "type":"button",
      "name":"删除",
      "uri":"/userAdmin/groupType",
      "menuId":8,
      "parent_id":null,
      "path":null,
      "method":"DELETE",
      "create_time":"2017-10-6 15:24:15",
      "update_time":"2017-10-6 15:24:15"
    }
  ];

}
