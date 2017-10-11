import {Injectable} from "@angular/core";
import {HttpUtil} from "../util/http.util";


@Injectable()
export class UserService{
  private baseUrl = "photo/";
  constructor(private httpUtil: HttpUtil){
  }

}
