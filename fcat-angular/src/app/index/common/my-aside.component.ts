import { Component,OnInit } from '@angular/core';
import { Config } from '../../app-config';
import {TMenuService} from "../../baseinfo/t-menu.service";
import {TMenuMockService} from "../../baseinfo/t-menu-mock.service";

@Component({
  selector: 'my-aside',
  templateUrl: './my-aside.component.html'
})

export class MyAsideComponent implements OnInit{
  treeMenu:any[];
  app:any;
  selectedMenuId:any;
  username:string;
  selectedSystemId:any;
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
      this.treeMenu = data.data;
      this.selectMenuList();


    });
  }

  private selectMenuList():void {
    if(this.treeMenu && this.treeMenu.length>0 ){
      if(!this.selectedSystemId){
        this.selectedSystemId = this.treeMenu[0].id;
      }
    }
    for(let i=0;i<this.treeMenu.length;i++){
      console.log("data:",this.treeMenu[i]);
      if(this.treeMenu[i].id==this.selectedSystemId){
        this.menuList = this.treeMenu[i].children;
      }
    }
  }
}
