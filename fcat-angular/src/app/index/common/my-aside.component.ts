import { Component,OnInit } from '@angular/core';
import { Config } from '../../app-config';
import {TMenuService} from "../../baseinfo/t-menu.service";
import {TMenuMockService} from "../../baseinfo/t-menu-mock.service";

@Component({
  selector: 'my-aside',
  templateUrl: './my-aside.component.html'
})

export class MyAsideComponent implements OnInit{
  app:any;
  selectedMenuId:any;
  username:string;
  selectedSystemId:any = 13;
  menuList:any[];
  constructor(private config:Config,
              private tMenuService:TMenuService,
              private tMenuMockService:TMenuMockService ){
    this.app = config.appConfig;
  }
  ngOnInit():void {
    let sessionInfo = JSON.parse(localStorage.getItem("sessionInfo"));
    this.username = sessionInfo.username;
    this.getUserMenu();
  }

  getUserMenu():void {
    this.tMenuMockService.getMenuTree().then(data => {
      console.log("data:",data.data);
      for(let i=0;i<data.data.length;i++){
        console.log("data:",data.data[i]);
        if(data.data[i].id==this.selectedSystemId){
          this.menuList = data.data[i].children;
        }
      }

    });
  }
}
