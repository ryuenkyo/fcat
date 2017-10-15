import {Injectable} from "@angular/core";
import {HttpUtil} from "../util/http.util";
import {LoginUser} from "./LoginUser";


@Injectable()
export class LoginService{
  private baseUrl = "login/";
  constructor(private httpUtil: HttpUtil){
  }

  login(username:string, password:string) {
    let loginUser = new LoginUser();
    loginUser.password = password;
    loginUser.username = username;
    let url = this.baseUrl+"userLogin";
    return this.httpUtil.post(url,loginUser);
  }

  getPublicKey():any {
    let url = this.baseUrl+"getPublicKey";
    return this.httpUtil.get(url);
  }

}
