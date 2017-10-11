/**
 * Created by F1 on 2017/6/1.
 */
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TMenuService} from './t-menu.service';
import {TElementService} from "./t-element.service";
import {TGroupTypeService} from "./t-group-type.service";
import {TGroupService} from "./t-group.service";

@Component({
  template: `
<section class="content-header">
  <h1>
    {{secondName}}
    <small>{{firstName}}</small>
  </h1>
  <ol class="breadcrumb">
    <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
    <li><a href="#">{{firstName}}</a></li>
    <li class="active">{{secondName}}</li>
  </ol>
</section>


<!-- Main content -->
<section class="content">
  <div class="row">
    <!-- Custom Tabs -->
    <div class="nav-tabs-custom">
      <ul class="nav nav-tabs">
        <li  *ngFor="let groupType of groupTypeList" (click)="selectedGroupType(groupType.id);" class="{{selectedGroupTypeId==groupType.id?'active':''}}">
        <a  data-toggle="tab">{{groupType.name}}</a>
        </li>
      </ul>
    </div>
  </div>
  <div class="row">
    <div class="col-xs-12">
      <div class="box">
        <div class="box-header">
          <h3 class="box-title">用户组类型信息</h3>
          <div class="btn-group" style="margin-left:10px;">
            <button type="button" class="btn btn-info"><i class="fa fa-plus"></i></button>
            <button type="button" class="btn btn-info"><i class="fa fa-pencil"></i></button>
            <button type="button" class="btn btn-info"><i class="fa fa-institution (alias)"></i></button>
          </div>

          <div class="box-tools">
            <div class="input-group input-group-sm" style="width: 150px;">
              <input type="text" name="table_search" class="form-control pull-right" placeholder="Search">

              <div class="input-group-btn">
                <button type="submit" class="btn btn-default"><i class="fa fa-search"></i></button>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-content">
         <div class="box-body table-responsive ">
            <table class="table table-hover table-bordered">
              <tr>
                <th style="width:8px;"></th>
                <th>ID</th>
                <th>编码</th>
                <th>名称</th>
                <th>路径</th>
              </tr>
              <tr *ngFor="let group of groupList" (click)="radio.checked=true;">
                <td><input type="radio" name="r1" class="minimal" #radio ></td>
                <td>{{group.id}}</td>
                <td>{{group.code}}</td>
                <td>{{group.name}}</td>
                <td>{{group.path}}</td>
              </tr>
              <tr>
                <td colspan="8">
                  <form class="form-inline" style="float:right;">
                    <div class="form-group">
                    <pagination [disabled]="disabled" [totalItems]="totalItems"
                                [itemsPerPage]="pageSize"
                                (pageChanged)="pageChanged($event)"
                                (numPages)="numPages($event)"
                                [maxSize]="maxSize" [boundaryLinks]="true" class="pagination-sm"></pagination>
                     <!-- <my-pagination   [disabled]="disabled" [totalItems]="totalItems"
                                       [itemsPerPage]="pageSize"
                                       (pageChanged)="pageChanged($event)"
                                       (numPages)="numPages($event)"></my-pagination>
              -->      </div>
                  </form>
                </td>
              </tr>
            </table>
          </div>
      </div>
      </div>
    </div>
  </div>
</section>
`,
})
export class TUserGroupListComponent implements OnInit {
  groupTypeList:any[];
  selectedGroupTypeId:any;
  pageSize:number = 8;
  totalItems:number;
  currentPage:number = 1;
  firstText:string = '首页';
  disabled:boolean;
  firstName:string = '用户组类型管理';
  secondName:string = '用户组类型';
  maxSize:number = 5;
  groupList:any[];


  constructor(private router:Router, private groupTypeService:TGroupTypeService, private groupService:TGroupService) {
  }

  ngOnInit():void {
    this.getGrupTypeByPage();
  }


  getGrupTypeByPage() {
    this.groupTypeService.getGroupTypeList().subscribe(data => {
      this.groupTypeList = data.rows;
      this.totalItems = data.totalElements;
      this.selectedGroupTypeId = this.groupTypeList[0].id;
      this.selectedGroupType(this.selectedGroupTypeId);
    })
  }

  selectedGroupType(groupTypeId:any) {
    this.selectedGroupTypeId = groupTypeId;
    this.groupService.getGroupList(this.selectedGroupTypeId, '').subscribe(data => {
      this.groupList = data;
    });
  }

}
