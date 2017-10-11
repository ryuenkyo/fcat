/**
 * Created by F1 on 2017/5/31.
 */
import {
  Component, OnInit, Input, Output, EventEmitter
} from '@angular/core';
import {Config} from "../../app-config";

@Component({
  selector: 'my-content-header',
  templateUrl: './content-header.html'
})
export class MyContentHeaderComponent{
  app:any;
  @Input() public firstName:string;
  @Input() public secondName:string;
  constructor(private config:Config){
    this.app = config.appConfig;
  }
}
