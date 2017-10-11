import {Injectable} from "@angular/core";
import {TUser} from "./t-user";




@Injectable()
export class TUserMockService{
  constructor(){
  }

  getById(id:number):Promise<any>{
    let user = this.getUsers().find(user => user.id===id);
    console.log("mock:getById:user=",user);
    return Promise.resolve(this.getJsonResult(user));
  }

  getUserList(currentPage:number, pageSize:number):Promise<any> {
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
  }

  getJsonResult(result:any){
    return {data:result,code:0};
  }
  getUsers(){
    let sessionInfo = JSON.parse(localStorage.getItem("sessionInfo"));
    if(!sessionInfo){
      return this.users;
    }
    if(!sessionInfo.users){
      sessionInfo.users = this.users;
      localStorage.setItem("sessionInfo",JSON.stringify(sessionInfo));
      return this.users;
    }else{
      return sessionInfo.users;
    }
  }

  add(tUser:any):Promise<any> {

    let sessionInfo = JSON.parse(localStorage.getItem("sessionInfo"));
    if(tUser.id){ //修改
      console.log("update:",tUser);
      sessionInfo.users = sessionInfo.users.filter(user => user.id!=tUser.id); //删除
    }else{
      tUser.id = Math.ceil(Math.random()*10000000);
    }
    sessionInfo.users.push(tUser);
    localStorage.setItem("sessionInfo",JSON.stringify(sessionInfo));
    return Promise.resolve(this.getJsonResult(true));
  }

  delete(id:any):Promise<any> {
    let sessionInfo = JSON.parse(localStorage.getItem("sessionInfo"));
    sessionInfo.users = sessionInfo.users.filter(user => user.id!=id);
    console.log(sessionInfo.users);
    localStorage.setItem("sessionInfo",JSON.stringify(sessionInfo));
    return Promise.resolve(this.getJsonResult(true));
  }

  login(username:string, password:string):Promise<any> {
    let user = this.getUsers().find(user => user.username===username);
    console.log(JSON.stringify(user));
    if(!user || user.password != password){
      return Promise.resolve(this.getJsonResult(false));
    }else{
      return Promise.resolve(this.getJsonResult(true));
    }
  }

  users:Array<TUser> = [
    {
      "id":1,
      "username":"xiaoliu",
      "password":"123456",
      "name":"小刘",
      "birthday":"1991-02-11",
      "address":"广东省深圳市福田",
      "mobilePhone":"13025442101",
      "telPhone":"07997287924",
      "email":"xiaoliu@163.com",
      "sex":"M",
      "status":"Y",
      "createTime":"2017-10-6 14:40:36",
      "updateTime":"2017-10-6 14:40:36"
    },
    {
      "id":2,
      "username":"aki",
      "password":"123456",
      "name":"阿沂",
      "birthday":"1989-02-11",
      "address":"广东省省长市水斗村",
      "mobilePhone":"13430932112",
      "telPhone":"07997287923",
      "email":"aki@163.com",
      "sex":"F",
      "status":"Y",
      "createTime":"2017-10-6 14:40:36",
      "updateTime":"2017-10-6 14:40:36"
    },
    {
      "id":3,
      "username":"xiaoxiong",
      "password":"123456",
      "name":"小熊",
      "birthday":"1995-02-11",
      "address":"广东省深圳市宝安",
      "mobilePhone":"13225442101",
      "telPhone":"07997287922",
      "email":"xiaoxiong@163.com",
      "sex":"M",
      "status":"Y",
      "createTime":"2017-10-6 14:40:36",
      "updateTime":"2017-10-6 14:40:36"
    },
    {
      "id":4,
      "username":"xiaofei",
      "password":"123456",
      "name":"小飞",
      "birthday":"1992-02-11",
      "address":"广东省深圳市盐田",
      "mobilePhone":"13225442101",
      "telPhone":"07997287922",
      "email":"xiaofei@163.com",
      "sex":"M",
      "status":"Y",
      "createTime":"2017-10-8 16:15:59",
      "updateTime":"2017-10-8 16:15:59"
    }
  ];
}
