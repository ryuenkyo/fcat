import {Injectable} from "@angular/core";
import {Http, Response, RequestOptions, Headers}          from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Config} from "../app-config";


@Injectable()
export class HttpUtil{
  private baseUrl:any;
  constructor(private config:Config, private http: Http){
    let app = config.appConfig;
    this.baseUrl = app.baseUrl;
  }

  post(url:string, param?:any){
    url = this.baseUrl + url;
    //url = this.getSessionIdUrl(url);
    let options;
    if(url.indexOf("oauth/token")>0){
      let headers = new Headers({'Authorization' :'Basic ZmNhdDpmY2F0U2VjcmV0'});
      options = new RequestOptions({headers:headers});
    }else{

    }

    //noinspection TypeScriptValidateTypes
    return this.http.post(url, param,options)
      .map(this.extractData)
      .catch(this.handleError);

  }


  put(url:string, param?:any){
    url = this.baseUrl + url;
    //url = this.getSessionIdUrl(url);
    let headers = new Headers({});
    let options = new RequestOptions({ });
    //noinspection TypeScriptValidateTypes
    return this.http.put(url, param,options)
      .map(this.extractData)
      .catch(this.handleError);

  }

  delete(url:string){
    url = this.baseUrl + url;
    //url = this.getSessionIdUrl(url);
    let headers = new Headers({ });
    let options = new RequestOptions({ });
    //noinspection TypeScriptValidateTypes
    return this.http.delete(url, options)
      .map(this.extractData)
      .catch(this.handleError);

  }

  get(url:string){
    url = this.baseUrl + url;
    //url = this.getSessionIdUrl(url);
    let token = JSON.parse(localStorage.getItem("token"));
    console.log("GET:"+url,token);
    let headers = new Headers({Authorization:token.token_type+" "+token.access_token});
    let options = new RequestOptions({ headers:headers});
    //noinspection TypeScriptValidateTypes
    return  this.http.get(url, options)
      .map(this.extractData)
      .catch(this.handleError);
  }


  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

   private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
