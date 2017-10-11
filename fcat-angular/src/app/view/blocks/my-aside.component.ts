/**
 * Created by F1 on 2017/5/31.
 */

import {Component} from "@angular/core";
import {Config} from "../../app-config";

@Component({
  selector: 'my-aside',
  templateUrl: './aside.html'
})
export class MyAsideComponent{
  app:any;
  constructor(private config:Config){
    this.app = config.appConfig;
  }
}
