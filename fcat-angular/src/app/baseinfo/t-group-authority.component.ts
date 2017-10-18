/**
 * Created by F1 on 2017/6/1.
 */
import {Component, OnInit,  enableProdMode} from '@angular/core';
import {Router, Params, ActivatedRoute} from '@angular/router';
import {TMenuService} from './t-menu.service';
import {TElementService} from "./t-element.service";
import {TMenuMockService} from "./t-menu-mock.service";
import {TElementMockService} from "./t-element-mock.service";
import {TMenu} from "./t-menu";
import {TElement} from "./t-element";
import {TGroupMockService} from "./t-group-mock.service";
import {TGroup} from "./t-group";
import {TGroupService} from "./t-group.service";
enableProdMode();
@Component({
  templateUrl: './t-group-authority.component.html',
})
export class TGroupAuthorityComponent implements OnInit {
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
  secondName:string = '组织架构管理';
  maxSize:number = 5;
  selectedMenu : TMenu = new TMenu();
  selectedElement:TElement = new TElement();
  tGroup:TGroup = new TGroup();
  selectedAll:boolean;

  /**选中的树形菜单**/
  treeSelected:any[];
  /**选中的元素**/
  selectedElementIds:number[] = [];


  constructor(private router:Router,
              private tMenuService:TMenuService,
              private tElementService:TElementService,
              private tGroupService:TGroupService,
              private route: ActivatedRoute) {


  }

  ngOnInit():void {
    this.getMenuList();
    this.tMenuService.getTree().subscribe(data => {
      this.menuTree = data.data;
    })
    //noinspection TypeScriptValidateTypes
    this.route.params
      .switchMap((params: Params) => {
        return this.tGroupService.getById(+params['id'])
      })
      .subscribe(data => {
        this.tGroup = data.data;
      });
  }

  selectedAllElement(){
    this.selectedAll = !this.selectedAll;
    if(this.selectedAll){
      this.elementList.forEach((element) => {
        let flag = false;
        for(let id of this.selectedElementIds){
          if(id==element.id){
            flag =true;
          }
        }
        if(!flag){
          this.selectedElementIds.push(element.id);
        }
      })
    }else{
      this.elementList.forEach((element) => {
        this.selectedElementIds = this.selectedElementIds.filter(id => id!=element.id);
      });
    }
    this.setCheckedElements();
  }

  selectedElement_(element:any){
    element.selected = !element.selected;
    if(element.selected){
      this.selectedElementIds.push(element.id);
    }else{
      this.selectedElementIds = this.selectedElementIds.filter(elementId => elementId!=element.id);
    }
  }

  onCheckboxSelect(data){
    this.treeSelected=data;
  }

  selectedRecord(data){
    this.selectedMenu = data;
    this.getElementByMenuId(this.selectedMenu.id);
    this.selectedElement = new TElement();
  }


  msg_(msg_:string) {
    this.msg = msg_;
  }

  addGroupAuthority(){
    let selectedMenuIds = [];
    console.log("treeSelected:",this.treeSelected);
    this.treeSelected.forEach((menu) => {
      if(menu.checked){
        selectedMenuIds.push(menu.id);
      }
      if(menu.children && menu.children.length>0){
         this.setChildrenChecked(selectedMenuIds,menu.children);
      }
    });
    this.msg = '授权的菜单：'+JSON.stringify(selectedMenuIds)+"  授权的元素："+JSON.stringify(this.selectedElementIds);
  }


  private setChildrenChecked(selectedMenuIds:any[], children:any[]):void {
    children.forEach((menu) => {
      if(menu.checked){
        selectedMenuIds.push(menu.id);
      }
      if(menu.children && menu.children.length>0){
        this.setChildrenChecked(selectedMenuIds,menu.children);
      }
    })
  }

   selectedMenu1(menu:any) {
     this.selectedMenu = menu;
     this.getElementByMenuId(this.selectedMenu.id);
     this.selectedElement = new TElement();
   }

  getMenuList(){
    this.tMenuService.getList(1,1000).subscribe(data => {
      this.menuList = data.data;
    });
  }

  getElementList() {
    this.tElementService.getList(0,1000).subscribe(data => {
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
      this.tMenuService.delete(this.selectedMenu.id).subscribe(data => {
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
    this.selectedAll = false;
    this.tElementService.getByMenuId(menuId).subscribe(data => {
      this.elementList = data.data;
      console.log(this.elementList);
      this.selectedAll = this.setCheckedElements();
    })
  }

  setCheckedElements(){
    let selectedAllFlag = true;
    this.elementList.forEach((element) => {
      let flag = false;
      this.selectedElementIds.forEach((id) => {
        if(element.id==id){
          element.selected = true;
          flag = true;
        }
      })
      if(!flag){
        element.selected = false;
        selectedAllFlag = false;
      }
    })
    return selectedAllFlag;
  }

}
