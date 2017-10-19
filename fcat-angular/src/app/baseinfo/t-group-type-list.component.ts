/**
 * Created by F1 on 2017/6/1.
 */
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TGroupTypeService} from "./t-group-type.service";
import {TGroupTypeMockService} from "./t-group-type-mock.service";
import {PageChangedEvent} from "ngx-bootstrap/pagination/pagination.component";
import {TGroupType} from "./t-group-type";

@Component({
  templateUrl: './t-group-type-list.component.html',
})
export class TGroupTypeListComponent implements OnInit {
  msg:string;
  groupTypeList:any[];
  firstText:string = '首页';
  disabled:boolean;
  firstName:string = '基础配置';
  secondName:string = '组织类型管理';
  selectedGroupType:TGroupType = new TGroupType();

  /**分页用到的参数**/
  pageSize:number = 2;
  maxSize:number = 5;
  totalItems:number;
  currentPage:number = 1;


  constructor(private router:Router,
              private tGroupTypeService:TGroupTypeService) {

  }

  ngOnInit():void {
    this.getGroupTypeList();
  }
  msg_(msg_:string) {
    this.msg = msg_;
  }
  pageChanged(page:PageChangedEvent) {
    this.currentPage = page.page;
    this.pageSize = page.itemsPerPage;
    this.getGroupTypeList();
  }

  numPages(numPages:number) {
    console.log(numPages);
  }



  onSelect(groupType:TGroupType):void {
    this.selectedGroupType = groupType;
  }

  getGroupTypeList():void {
    this.tGroupTypeService.getList(this.currentPage, this.pageSize).subscribe(data => {
      this.groupTypeList = data.data.data;
      this.totalItems = data.data.size;
    });

  }

  delete():void {
    if(!this.selectedGroupType.id){
      this.msg = "请选择用户信息";
      return;
    }
    if(window.confirm('你确定要删除记录吗？')){
      this.tGroupTypeService.delete(this.selectedGroupType.id).subscribe(data => {
        if(data.code==0){
          this.msg = "删除成功";
          this.getGroupTypeList();
        }else{
          this.msg = "删除失败";
        }
      });
    }
  }

  edit(){
    if(!this.selectedGroupType.id){
      this.msg = "请选择用户信息";
    }else{
      this.router.navigate(['/index/tGroupTypeUpdate', this.selectedGroupType.id]);
    }
  }

}
