import {Injectable} from "@angular/core";
import {TUser} from "./t-user";
import {HttpUtil} from "../util/http.util";


@Injectable()
export class TUserService{
  private baseUrl = "/user";
  constructor(private httpUtil: HttpUtil){
  }

  getUserList(currentPage:number, pageSize:number) {
    let limit = pageSize;
    let offset = currentPage-1;
    let param = "?limit="+limit+"&offset="+offset;
    let url = this.baseUrl+"/page"+param;
    return this.httpUtil.get(url);
  }

  delete(userId:string){
    let url = this.baseUrl+"/delete/"+userId;
    return this.httpUtil.delete(url);
  }

  add(user: TUser){
    let url = this.baseUrl+"/add";
    return this.httpUtil.post(url, user);
  }
  getUserCount(){
    let url = this.baseUrl+"/count";
    return this.httpUtil.get(url);
  }

  getById(id:number){
    let url = this.baseUrl+"/get/"+id;
    // TODO 2、根据用户ID查询用户信息 alert(url);
    return this.httpUtil.get(url);
  }
  update(user: TUser){
    let url = this.baseUrl+"/update";
    return this.httpUtil.post(url, user);
  }


}
