import {Injectable} from "@angular/core";
import {InfoUser} from "./infoUser";
import {HttpUtil} from "../util/http.util";


@Injectable()
export class InfoUserService{
  private baseUrl = "/infoUsers";
  constructor(private httpUtil: HttpUtil){
  }

  getInfoUserList(currentPage:number, pageSize:number) {
    let url = this.baseUrl+"/"+(currentPage-1)+"/"+pageSize;
    return this.httpUtil.get(url);
  }

  delete(id:any){
    let url = this.baseUrl+"/delete/"+id;
    return this.httpUtil.delete(url);
  }
  add(infoUser: InfoUser){
    let url = this.baseUrl+"/add";
    return this.httpUtil.post(url, infoUser);
  }
  getInfoUserCount(){
    let url = this.baseUrl+"/count";
    return this.httpUtil.get(url);
  }

  getById(id:any){
    let url = this.baseUrl+"/get/"+id;
    return this.httpUtil.get(url);
  }
  update(infoUser: InfoUser){
    let url = this.baseUrl+"/update";
    return this.httpUtil.post(url, infoUser);
  }

}
