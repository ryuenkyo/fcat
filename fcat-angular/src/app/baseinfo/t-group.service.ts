import {Injectable} from "@angular/core";
import {HttpUtil} from "../util/http.util";
import {TGroup} from "./t-group";


@Injectable()
export class TGroupService{
  private baseUrl = "/tGroup";
  constructor(private httpUtil: HttpUtil){
  }

  getUserList(currentPage:number, pageSize:number) {
    let param = "?pageSize="+pageSize+"&pageNum="+currentPage;
    let url = this.baseUrl+"/tGroup/listByPage"+param;
    return this.httpUtil.get(url);
  }

  delete(id:any){
    let url = this.baseUrl+"/"+id;
    return this.httpUtil.delete(url);
  }

  add(tGroup: TGroup){
    let url = this.baseUrl+"/add";
    return this.httpUtil.post(url, tGroup);
  }
  getById(id:number){
    let url = this.baseUrl+"/"+id;
    return this.httpUtil.get(url);
  }
  update(tGroup: TGroup){
    let url = this.baseUrl+"/update";
    return this.httpUtil.put(url, tGroup);
  }

}
