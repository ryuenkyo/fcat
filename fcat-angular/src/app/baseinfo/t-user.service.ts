import {Injectable} from "@angular/core";
import {TUser} from "./t-user";
import {HttpUtil} from "../util/http.util";


@Injectable()
export class TUserService{
  private baseUrl = "/fcat-user/v1/tUser";
  constructor(private httpUtil: HttpUtil){
  }

  getSessionInfo(){
    let url = "/fcat-user/v1/session/sessionInfo";
    return this.httpUtil.get(url);
  }

  setLocalSessionInfo(sessionInfo:any){
    sessionStorage.setItem("sessionInfo",JSON.stringify(sessionInfo));
  }

  getLocalSessionInfo():any{
    console.log(sessionStorage.getItem("sessionInfo"));
    return JSON.parse(sessionStorage.getItem("sessionInfo"));
  }


  getList(currentPage:number, pageSize:number) {
    let param = "?pageSize="+pageSize+"&pageNum="+currentPage;
    let url = this.baseUrl+"/listByPage"+param;
    return this.httpUtil.get(url);
  }

  delete(id:any){
    let url = this.baseUrl+"/"+id;
    return this.httpUtil.delete(url);
  }

  add(tUser: TUser){
    let url = this.baseUrl+"/add";
    return this.httpUtil.post(url, tUser);
  }
  getById(id:number){
    let url = this.baseUrl+"/"+id;
    return this.httpUtil.get(url);
  }
  update(user: TUser){
    let url = this.baseUrl+"/update";
    return this.httpUtil.put(url, user);
  }
}
