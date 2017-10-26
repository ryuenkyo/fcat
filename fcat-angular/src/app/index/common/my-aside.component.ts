import { Component,OnInit } from '@angular/core';
import { Config } from '../../app-config';
import {TMenuService} from "../../baseinfo/t-menu.service";
import {TUserService} from "../../baseinfo/t-user.service";

@Component({
  selector: 'my-aside',
  templateUrl: './my-aside.component.html'
})

export class MyAsideComponent implements OnInit{
  treeMenu:any[];
  app:any;
  selectedMenuId:any;
  firstMenuId:any;
  username:string;
  selectedSystemId:any;
  menuList:any[];

  flag : boolean;

  constructor(private config:Config,
              private tMenuService:TMenuService,
              private tUserService:TUserService){
    this.app = config.appConfig;
    this.flag=false;
  }
  ngOnInit():void {
    this.tUserService.getSessionInfo().subscribe(data =>{ 
      this.tUserService.setLocalSessionInfo(data.data);
      this.username = data.data.username;
      //this.getUserMenu();
      this.tUserService.getAuthorityByUsername(this.username).subscribe(data =>{
        this.treeMenu = data.data.tMenuTrees;
        this.selectMenuList();
        this.tUserService.setLocalAuthorityTElements(data.data.tElements);
      });
    });
  }

  toggle(){
    this.flag = !this.flag;
  }

  getUserMenu():void {
    this.tMenuService.getTree().subscribe(data => {
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
      if(this.treeMenu[i].id==this.selectedSystemId){
        this.menuList = this.treeMenu[i].children;
      }
    }
  }
}
