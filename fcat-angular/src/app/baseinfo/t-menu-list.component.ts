/**
 * Created by F1 on 2017/6/1.
 */
import {Component, OnInit, enableProdMode} from "@angular/core";
import {Router} from "@angular/router";
import {TMenuService} from "./t-menu.service";
import {TElementService} from "./t-element.service";
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
              private tElementService:TElementService) {
  }

  ngOnInit():void {
    this.getList();
    this.tMenuService.getTree().subscribe(data => {
      this.menuTree = data.data;
      this.menuTree.forEach((menu) =>{
        menu.parentId = null;
      });
      console.log("menuTree:",this.menuTree);
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

  getList(){
    this.tMenuService.getList(1,1000).subscribe(data => {
      this.menuList = data.data;
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
      this.tMenuService.delete(this.selectedMenu.id).subscribe(data => {
        if(data.code==0){
          this.msg = "删除成功";
          this.getList();
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
      this.tElementService.delete(this.selectedElement.id).subscribe(data => {
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
    this.tElementService.getByMenuId(menuId).subscribe(data => {
      this.elementList = data.data;
      console.log(this.elementList);
    })
  }




}
