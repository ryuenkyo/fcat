import {Injectable} from "@angular/core";
import {TGroupType} from "./t-group-type";

/**
 * Created by F1 on 2017/10/1.
 */
@Injectable()
export class TGroupTypeMockService{
  constructor(){
  }

  getById(id:number):Promise<any>{
    let groupType = this.getGroupTypes().find(groupType => groupType.id===id);
    console.log("mock:getById:groupType=",groupType);
    return Promise.resolve(this.getJsonResult(groupType));
  }

  getGroupTypeList(currentPage:number, pageSize:number):Promise<any> {
    let limit = pageSize;
    let offset = currentPage-1;
    let param = "?limit="+limit+"&offset="+offset;
    let groupTypes = [];
    this.getGroupTypes().forEach((groupType,index,array) =>{
      console.log("array:",array);
      if(index>=limit*(offset) && index<limit*(offset+1)&&index<array.length){
        groupTypes.push(groupType);
      }
    });
    let result = {data:groupTypes,size:this.getGroupTypes().length};
    console.log("result:",result);
    return Promise.resolve(this.getJsonResult(result));
  }

  getJsonResult(result:any){
    return {data:result,code:0};
  }
  getGroupTypes(){
    let sessionInfo = JSON.parse(localStorage.getItem("sessionInfo"));
    if(!sessionInfo){
      return this.groupTypes;
    }
    if(!sessionInfo.groupTypes){
      sessionInfo.groupTypes = this.groupTypes;
      localStorage.setItem("sessionInfo",JSON.stringify(sessionInfo));
      return this.groupTypes;
    }else{
      return sessionInfo.groupTypes;
    }
  }

  add(tGroupType:any):Promise<any> {

    let sessionInfo = JSON.parse(localStorage.getItem("sessionInfo"));
    if(tGroupType.id){ //修改
      console.log("update:",tGroupType);
      sessionInfo.groupTypes = sessionInfo.groupTypes.filter(groupType => groupType.id!=tGroupType.id); //删除
    }else{
      tGroupType.id = Math.ceil(Math.random()*10000000);
    }
    sessionInfo.groupTypes.push(tGroupType);
    localStorage.setItem("sessionInfo",JSON.stringify(sessionInfo));
    return Promise.resolve(this.getJsonResult(true));
  }

  delete(id:any):Promise<any> {
    let sessionInfo = JSON.parse(localStorage.getItem("sessionInfo"));
    sessionInfo.groupTypes = sessionInfo.groupTypes.filter(groupType => groupType.id!=id);
    console.log(sessionInfo.groupTypes);
    localStorage.setItem("sessionInfo",JSON.stringify(sessionInfo));
    return Promise.resolve(this.getJsonResult(true));
  }

  login(groupTypename:string, password:string):Promise<any> {
    let groupType = this.getGroupTypes().find(groupType => groupType.groupTypename===groupTypename);
    console.log(JSON.stringify(groupType));
    if(!groupType || groupType.password != password){
      return Promise.resolve(this.getJsonResult(false));
    }else{
      return Promise.resolve(this.getJsonResult(true));
    }
  }

  groupTypes:Array<TGroupType> = [
    {
      "id":1,
      "code":"role",
      "name":"角色类型",
      "createTime":"2017-10-6 14:40:36",
      "updateTime":"2017-10-6 14:40:36"
    },
    {
      "id":2,
      "code":"depart",
      "name":"部门类型",
      "createTime":"2017-10-6 14:40:36",
      "updateTime":"2017-10-6 14:40:36"
    },
    {
      "id":3,
      "code":"custom",
      "name":"自定义类型",
      "createTime":"2017-10-6 14:40:36",
      "updateTime":"2017-10-6 14:40:36"
    }
  ];
}
