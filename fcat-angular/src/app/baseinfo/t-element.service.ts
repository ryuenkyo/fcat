import {Injectable} from "@angular/core";
import {HttpUtil} from "../util/http.util";


@Injectable()
export class TElementService{
  private baseUrl = "/element";
  constructor(private httpUtil: HttpUtil){
  }

  getElementByPage(menuId:number) {
    let param = "?limit=100&offset=0&menuId="+menuId;
    let url = this.baseUrl+"/page"+param;
    return this.httpUtil.get(url);
  }


}
