/**
 * Created by F1 on 2017/6/1.
 */
import {Component, OnInit,  enableProdMode} from '@angular/core';
import {Router} from '@angular/router';
import {TMenuService} from './t-menu.service';
import {TElementService} from "./t-element.service";
import {TMenuMockService} from "./t-menu-mock.service";
import {TElementMockService} from "./t-element-mock.service";
import {TMenu} from "./t-menu";
import {TElement} from "./t-element";
enableProdMode();
@Component({
  templateUrl: './t-menu-list.component.html',
})
export class TMenuListComponent implements OnInit {
  msg:string;
  menuList:any[];
  menuTree:any[];
  elementList:any[];
  pageSize:number = 8;
  totalItems:number;
  currentPage:number = 1;
  firstText:string = '首页';
  disabled:boolean;
  firstName:string = '基础配置';
  secondName:string = '菜单管理';
  maxSize:number = 5;

  selectedMenu : TMenu = new TMenu();

  selectedElement:TElement = new TElement();

  constructor(private router:Router,
              private tMenuService:TMenuService,
              private tMenuMockService:TMenuMockService,
              private tElementService:TElementService,
              private tElementMockService:TElementMockService) {
  }

  ngOnInit():void {
    this.getMenuList();
    this.tMenuMockService.getMenuTree().then(data => {
      this.menuTree = data.data;
      console.log("tree:",JSON.stringify(this.menuTree));
    })
  }
  
  msg_(msg_:string) {
    this.msg = msg_;
  }

   selectedMenu1(menu:any) {
     this.selectedMenu = menu;
     this.getElementByMenuId(this.selectedMenu.id);
     this.selectedElement = new TElement();
   }

  getMenuList(){
    this.tMenuMockService.getMenuList().then(data => {
      this.menuList = data.data;
    });
  }

  private getElementList() {
    this.tElementMockService.getElementList().then(data => {
      this.elementList = data.data;
    });
  }

  updateMenu(){
    if(!this.selectedMenu.id){
      this.msg = "请选择菜单";
    }else{
      this.router.navigate(['/index/tMenuUpdate', this.selectedMenu.id]);
    }
  }
  deleteMenu(){
    if(!this.selectedMenu.id){
      this.msg = "请选择菜单";
      return;
    }
    if(window.confirm('你确定要删除记录吗？')){
      this.tMenuMockService.delete(this.selectedMenu.id).then(data => {
        if(data.code==0){
          this.msg = "删除成功";
          this.getMenuList();
        }else{
          this.msg = "删除失败";
        }
      });
    }
  }

  updateElement(){
    if(!this.selectedElement.id){
      this.msg = "请选择元素";
    }else{
      this.router.navigate(['/index/tElementUpdate', this.selectedElement.id]);
    }
  }

  addElement(){
    if(!this.selectedMenu.id){
      this.msg = "请选择菜单";
    }else{
      this.router.navigate(['/index/tElementAdd', this.selectedMenu.id]);
    }
  }

  deleteElement(){
    if(!this.selectedElement.id){
      this.msg = "请选择元素";
      return;
    }
    if(window.confirm('你确定要删除记录吗？')){
      this.tElementMockService.delete(this.selectedElement.id).then(data => {
        if(data.code==0){
          this.msg = "删除成功";
          this.getElementByMenuId(this.selectedMenu.id);
        }else{
          this.msg = "删除失败";
        }
      });
    }
  }

  getElementByMenuId(menuId:number){
    this.tElementMockService.getElementByMenuId(menuId).then(data => {
      this.elementList = data.data;
      console.log(this.elementList);
    })
  }

}
