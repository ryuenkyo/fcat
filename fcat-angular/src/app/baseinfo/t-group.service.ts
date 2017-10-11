import {Injectable} from "@angular/core";
import {HttpUtil} from "../util/http.util";


@Injectable()
export class TGroupService{
  private baseUrl = "/group";
  constructor(private httpUtil: HttpUtil){
  }

  getGroupList(groupType:any, name:any) {
    let param = "?groupType="+groupType+"&name="+name;
    let url = this.baseUrl+"/list"+param;
    return this.httpUtil.get(url);
  }

}
