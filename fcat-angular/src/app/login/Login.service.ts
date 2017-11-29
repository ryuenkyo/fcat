import {Injectable} from "@angular/core";
import {HttpUtil} from "../util/http.util";


@Injectable()
export class LoginService{
  constructor(private httpUtil: HttpUtil){
  }

  login(username:string, password:string) {
    let param = {'username':username,'password':password,grant_type:'password',scope:'server'};
    console.log(param);
    let url = "/fcat-auth/oauth/token?username=aki&password=123456&grant_type=password&scope=server";

    //return this.httpUtil.postForm(url,param);
    return this.httpUtil.post(url);
  }

}
