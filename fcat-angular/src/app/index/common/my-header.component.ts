import { Component,OnInit } from '@angular/core';
import { Config } from '../../app-config';
import {TUserService} from "../../baseinfo/t-user.service";

@Component({
  selector: 'my-header',
  templateUrl: './my-header.component.html'
})

export class MyHeaderComponent  implements OnInit{
  app:any;
  username:string;

  sidebar:boolean=true;
  constructor(private config:Config,
              private tUserService:TUserService){
    this.app = config.appConfig;
    this.tUserService.getSessionInfo().subscribe(data =>{
      this.tUserService.setLocalSessionInfo(data.data);
      this.username = data.data.userName;
    });
  }

  ngOnInit():void {
  }
  dropdownToggle(){
    this.sidebar = !this.sidebar;
    if(this.sidebar){
      document.getElementsByTagName("body").item(0).classList.remove('sidebar-collapse');
    }else{
      document.getElementsByTagName("body").item(0).classList.add('sidebar-collapse');
    }

  }
}
