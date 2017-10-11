import {Injectable} from "@angular/core";
import {HttpUtil} from "../util/http.util";


@Injectable()
export class TGroupTypeService{
  private baseUrl = "/groupType";
  constructor(private httpUtil: HttpUtil){
  }

  getGroupTypeList() {
    let param = "?limit=100&offset=0";
    let url = this.baseUrl+"/page"+param;
    return this.httpUtil.get(url);
  }


}
