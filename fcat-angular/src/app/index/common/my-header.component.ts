import { Component } from '@angular/core';
import { Config } from '../../app-config';

@Component({
  selector: 'my-header',
  templateUrl: './my-header.component.html'
})

export class MyHeaderComponent {
  app:any;
  username:string;
  constructor(private config:Config){
    this.app = config.appConfig;
    let sessionInfo = JSON.parse(localStorage.getItem("sessionInfo"));
    this.username = sessionInfo.username;
  }
}
