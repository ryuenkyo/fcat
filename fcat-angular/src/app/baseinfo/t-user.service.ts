import {Injectable} from "@angular/core";
import {TUser} from "./t-user";
import {HttpUtil} from "../util/http.util";


@Injectable()
export class TUserService{
  private baseUrl = "/fcat-user/v1/";
  constructor(private httpUtil: HttpUtil){
  }

  getSessionInfo(){
    let url = this.baseUrl+"session/sessionInfo";
    return this.httpUtil.get(url);
  }

  setLocalSessionInfo(sessionInfo:any){
    sessionStorage.setItem("sessionInfo",JSON.stringify(sessionInfo));
  }

  getLocalSessionInfo():any{
    return JSON.parse(sessionStorage.getItem("sessionInfo"));
  }


  getUserList(currentPage:number, pageSize:number) {
    let param = "?pageSize="+pageSize+"&pageNum="+currentPage;
    let url = this.baseUrl+"/tUser/getTUsersByPage"+param;
    return this.httpUtil.get(url);
  }

  delete(id:any){
    let url = this.baseUrl+"/tUser/"+id;
    return this.httpUtil.delete(url);
  }

  add(tUser: TUser){
    let url = this.baseUrl+"/tUser/add";
    return this.httpUtil.post(url, tUser);
  }
  getUserCount(){
    let url = this.baseUrl+"/count";
    return this.httpUtil.get(url);
  }

  getById(id:number){
    let url = this.baseUrl+"/tUser/"+id;
    return this.httpUtil.get(url);
  }
  update(user: TUser){
    let url = this.baseUrl+"/tUser/update";
    return this.httpUtil.put(url, user);
  }



}
