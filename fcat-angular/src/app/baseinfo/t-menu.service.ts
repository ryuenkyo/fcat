import {Injectable} from "@angular/core";
import {HttpUtil} from "../util/http.util";


@Injectable()
export class TMenuService{
  private baseUrl = "/menu";
  constructor(private httpUtil: HttpUtil){
  }

  getMenuList() {
    let url = this.baseUrl+"/all";
    return this.httpUtil.get(url);
  }

  getUserMenu(){
    let url = this.baseUrl+"/user/authorityTree";
    return this.httpUtil.get(url);
  }


}
