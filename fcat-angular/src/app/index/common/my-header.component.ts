import { Component } from '@angular/core';
import { Config } from '../../app-config';
import {TUserService} from "../../baseinfo/t-user.service";

@Component({
  selector: 'my-header',
  templateUrl: './my-header.component.html'
})

export class MyHeaderComponent {
  app:any;
  username:string;
  constructor(private config:Config,
              private tUserService:TUserService){
    this.app = config.appConfig;
    this.tUserService.getSessionInfo().subscribe(data =>{
      this.tUserService.setLocalSessionInfo(data.data);
      this.username = data.data.userName;
    });
  }
}
