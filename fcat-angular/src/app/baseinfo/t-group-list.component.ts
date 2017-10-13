/**
 * Created by F1 on 2017/6/1.
 */
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TGroupTypeService} from "./t-group-type.service";
import {TGroupService} from "./t-group.service";
import {TGroupTypeMockService} from "./t-group-type-mock.service";
import {TGroupMockService} from "./t-group-mock.service";
import {PageChangedEvent} from "ngx-bootstrap/pagination/pagination.component";
import {TGroup} from "./t-group";

@Component({
  templateUrl: 't-group-list.component.html'
})
export class TGroupListComponent implements OnInit {
  msg:string;
  groupTypeList:any[];
  selectedGroupTypeId:any;
  pageSize:number = 8;
  totalItems:number;
  currentPage:number = 1;
  firstText:string = '首页';
  disabled:boolean;
  firstName:string = '基础配置';
  secondName:string = '组织架构管理';
  maxSize:number = 5;
  groupList:any[];

  selectedGroup:TGroup = new TGroup();


  constructor(private router:Router,
              private tGroupTypeService:TGroupTypeService,
              private tGroupService:TGroupService,
              private tGroupTypeMockService:TGroupTypeMockService,
              private tGroupMockService:TGroupMockService) {
  }

  ngOnInit():void {
    this.getGrupTypeByPage();
  }

  msg_(msg_:string) {
    this.msg = msg_;
  }
  pageChanged(page:PageChangedEvent) {
    this.currentPage = page.page;
    this.pageSize = page.itemsPerPage;
    this.selectedGroupType(this.selectedGroupTypeId);
  }

  numPages(numPages:number) {
    console.log(numPages);
  }

  getGrupTypeByPage() {
    this.tGroupTypeMockService.getGroupTypeList(1,100).then(data => {
      console.log("data:",data);
      this.groupTypeList = data.data.data;
      this.totalItems = data.data.size;
      this.selectedGroupTypeId = this.groupTypeList[0].id;
      this.selectedGroupType(this.selectedGroupTypeId);
    })
  }

  selectedGroupType(groupTypeId:any) {
    this.selectedGroup=new TGroup();
    this.selectedGroupTypeId = groupTypeId;
    this.tGroupMockService.getGroupListByGroupTypeId(this.selectedGroupTypeId).then(data => {
      this.groupList = data.data;
    });
  }


  delete():void {
    if(!this.selectedGroup.id){
      this.msg = "请选择组织";
      return;
    }
    if(window.confirm('你确定要删除记录吗？')){
      this.tGroupMockService.delete(this.selectedGroup.id).then(data => {
        if(data.code==0){
          this.msg = "删除成功";
          this.getGrupTypeByPage();
        }else{
          this.msg = "删除失败";
        }
      });
    }
  }

  edit(){
    if(!this.selectedGroup.id){
      this.msg = "请选择组织";
    }else{
      this.router.navigate(['/index/tGroupUpdate', this.selectedGroup.id]);
    }
  }

  add(){
    this.router.navigate(['/index/tGroupAdd', this.selectedGroupTypeId]);
  }

  groupAddUser(){
    if(!this.selectedGroup.id){
      this.msg = "请选择组织";
    }else{
      this.router.navigate(['/index/tGroupAddUser', this.selectedGroup.id]);
    }
  }

}
