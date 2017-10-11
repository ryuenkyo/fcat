/**
 * Created by F1 on 2017/5/31.
 */

import {Component} from "@angular/core";
import {Config} from "../../app-config";

@Component({
  selector: 'my-header',
  templateUrl: './header.html'
})
export class MyHeaderComponent{
  app:any;
  constructor(private config:Config){
    this.app = config.appConfig;
  }
  getJSONApp(){
    return JSON.stringify(this.app);
  }
  setAsideFolded(){
    this.app.settings.asideFolded = !this.app.settings.asideFolded;
    //AppConfig.settings.asideFolde = this.app.settings.asideFolded;
  }
}
