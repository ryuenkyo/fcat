import {Injectable} from "@angular/core";
import {TGroup} from "./t-group";




@Injectable()
export class TGroupMockService{
  constructor(){
  }

  getById(id:number):Promise<any>{
    let group = this.getGroups().find(group => group.id===id);
    console.log("mock:getById:group=",group);
    return Promise.resolve(this.getJsonResult(group));
  }


  getGroupListByGroupTypeId(selectedGroupTypeId:any):Promise<any> {
    let groups = [];
    this.getGroups().forEach((group,index,array) =>{
      console.log("array:",array);
       if(group.groupTypeId==selectedGroupTypeId){
         groups.push(group);
       }
    });
    console.log("result:",groups);
    return Promise.resolve(this.getJsonResult(groups));
  }

/*  getUserList(currentPage:number, pageSize:number):Promise<any> {
    let limit = pageSize;
    let offset = currentPage-1;
    let param = "?limit="+limit+"&offset="+offset;
    let users = [];
    this.getUsers().forEach((user,index,array) =>{
      console.log("array:",array);
      if(index>=limit*(offset) && index<limit*(offset+1)&&index<array.length){
        users.push(user);
      }
    });
    let result = {data:users,size:this.getUsers().length};
    console.log("result:",result);
    return Promise.resolve(this.getJsonResult(result));
  }*/


  getJsonResult(result:any){
    return {data:result,code:0};
  }
  getGroups(){
    let sessionInfo = JSON.parse(localStorage.getItem("sessionInfo"));
    if(!sessionInfo){
      return this.groups;
    }
    if(!sessionInfo.groups){
      sessionInfo.groups = this.groups;
      localStorage.setItem("sessionInfo",JSON.stringify(sessionInfo));
      return this.groups;
    }else{
      return sessionInfo.groups;
    }
  }

  add(tGroup:any):Promise<any> {

    let sessionInfo = JSON.parse(localStorage.getItem("sessionInfo"));
    if(tGroup.id){ //修改
      console.log("update:",tGroup);
      sessionInfo.groups = sessionInfo.groups.filter(group => group.id!=tGroup.id); //删除
    }else{
      tGroup.id = Math.ceil(Math.random()*10000000);
    }
    sessionInfo.groups.push(tGroup);
    localStorage.setItem("sessionInfo",JSON.stringify(sessionInfo));
    return Promise.resolve(this.getJsonResult(true));
  }

  delete(id:any):Promise<any> {
    let sessionInfo = JSON.parse(localStorage.getItem("sessionInfo"));
    sessionInfo.groups = sessionInfo.groups.filter(group => group.id!=id);
    console.log(sessionInfo.groups);
    localStorage.setItem("sessionInfo",JSON.stringify(sessionInfo));
    return Promise.resolve(this.getJsonResult(true));
  }

  groups:Array<TGroup> = [
    {
      "id":1,
      "code":"role",
      "name":"角色",
      "parentId":null,
      "path":"/role",
      "groupTypeId":0,
      "createTime":"2017-10-12 13:14:13",
      "updateTime":"2017-10-12 13:14:13"
    },
    {
      "id":2,
      "code":"superAdmin",
      "name":"超级管理员",
      "parentId":null,
      "path":"/role/superAdmin",
      "groupTypeId":1,
      "createTime":"2017-10-6 21:29:40",
      "updateTime":"2017-10-6 21:29:40"
    },
    {
      "id":4,
      "code":"tourist",
      "name":"游客",
      "parentId":3,
      "path":"/role/tourist",
      "groupTypeId":1,
      "createTime":"2017-10-6 21:29:40",
      "updateTime":"2017-10-6 21:29:40"
    },
    {
      "id":6,
      "code":"company",
      "name":"深圳华为技术有限公司",
      "parentId":null,
      "path":"/company",
      "groupTypeId":2,
      "createTime":"2017-10-6 21:29:40",
      "updateTime":"2017-10-6 21:29:40"
    },
    {
      "id":7,
      "code":"financeDepart",
      "name":"财务部",
      "parentId":6,
      "path":"/company/financeDepart",
      "groupTypeId":2,
      "createTime":"2017-10-6 21:29:40",
      "updateTime":"2017-10-6 21:29:40"
    },
    {
      "id":8,
      "code":"hrDepart",
      "name":"人力资源部",
      "parentId":6,
      "path":"/company/hrDepart",
      "groupTypeId":2,
      "createTime":"2017-10-6 21:29:40",
      "updateTime":"2017-10-6 21:29:40"
    }
  ];

}
