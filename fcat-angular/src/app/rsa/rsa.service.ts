import {Injectable} from "@angular/core";
import {Rsa} from "./rsa";

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {HttpUtil} from "../util/http.util";


@Injectable()
export class RsaService{
  private baseUrl = "rsa/";
  constructor(private httpUtil: HttpUtil){
  }
  getPublicKey():any {
    let url = this.baseUrl+"getPublicKey";
    console.log(url);
    return this.httpUtil.get(url);
  }
}
