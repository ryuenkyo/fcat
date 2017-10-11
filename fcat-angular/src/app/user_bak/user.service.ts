import {Injectable} from "@angular/core";
import {User} from "./user";
import {HttpUtil} from "../util/http.util";


@Injectable()
export class UserService{
  private baseUrl = "infoUser/";
  constructor(private httpUtil: HttpUtil){
  }

  getUserList(currentPage:number, pageSize:number) {
    let url = this.baseUrl+"getList?pageNo="+currentPage+"&pageSize="+pageSize;
    return this.httpUtil.get(url);
  }

  delete(userId:string){
    let url = this.baseUrl+"delete/"+userId;
    return this.httpUtil.post(url);
  }
  add(user: User){
    let url = this.baseUrl+"add";
    return this.httpUtil.post(url, user);
  }
  getUserCount(){
    let url = this.baseUrl+"count";
    return this.httpUtil.get(url);
  }

  getById(id:number){
    let url = this.baseUrl+"getById?id="+id;
    return this.httpUtil.get(url);
  }
  update(user: User){
    let url = this.baseUrl+"update";
    return this.httpUtil.post(url, user);
  }

}
