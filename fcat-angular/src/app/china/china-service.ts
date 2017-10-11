import {Injectable} from "@angular/core";
import {China} from "./china";
import {HttpUtil} from "../util/http.util";


@Injectable()
export class ChinaService{
  private baseUrl = "/chinas";
  constructor(private httpUtil: HttpUtil){
  }

  getChinaList(currentPage:number, pageSize:number) {
    let url = this.baseUrl+"/"+(currentPage)+"/"+pageSize;
    return this.httpUtil.get(url);
  }

  delete(id:any){
    let url = this.baseUrl+"/delete/"+id;
    return this.httpUtil.delete(url);
  }
  add(china: China){
    let url = this.baseUrl+"/add";
    return this.httpUtil.post(url, china);
  }
  getChinaCount(){
    let url = this.baseUrl+"/count";
    return this.httpUtil.get(url);
  }

  getById(id:any){
    let url = this.baseUrl+"/get/"+id;
    return this.httpUtil.get(url);
  }
  update(china: China){
    let url = this.baseUrl+"/update";
    return this.httpUtil.post(url, china);
  }

}
