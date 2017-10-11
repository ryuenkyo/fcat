/**
 * Created by F1 on 2017/6/1.
 */
import {Component, OnInit, enableProdMode} from '@angular/core';
import {Router} from '@angular/router';
import {TUserService} from './t-user.service';
import {TUser} from "./t-user";
import {TUserMockService} from "./t-user-mock.service";
import {PageChangedEvent} from "ngx-bootstrap/pagination/pagination.component";
enableProdMode();//阻止报错：Expression has changed after it was checked
@Component({
  templateUrl: './t-user-list.component.html',
})
export class TUserListComponent implements OnInit {
  msg: string;
  userList:TUser[];
  selectedUser:TUser = new TUser();
  firstText:string = '首页';
  disabled:boolean;
  firstName:string = '基础配置';
  secondName:string = '用户管理';

  /**分页用到的参数**/
  pageSize:number = 2;
  maxSize:number = 5;
  totalItems:number;
  currentPage:number = 1;

  constructor(private router:Router,
              private userService:TUserService,
              private tUserMockService:TUserMockService) {
  }

  ngOnInit():void {
      this.getUserList();
  }
  msg_(msg_:string) {
    this.msg = msg_;
  }
  pageChanged(page:PageChangedEvent) {
    this.currentPage = page.page;
    this.pageSize = page.itemsPerPage;
    this.getUserList();
  }

  numPages(numPages:number) {
    console.log(numPages);
  }



  onSelect(user:TUser):void {
    this.selectedUser = user;
  }

  getUserList():void {
    //TODO 1、获取用户列表（分页）  subscribe
    this.tUserMockService.getUserList(this.currentPage, this.pageSize).then(data => {
      console.log(data);
      this.userList = data.data.data;
      this.totalItems = data.data.size;
    });

   }

  delete():void {
    if(!this.selectedUser.id){
      this.msg = "请选择用户信息";
      return;
    }
    if(window.confirm('你确定要删除记录吗？')){
      this.tUserMockService.delete(this.selectedUser.id).then(data => {
        if(data.code==0){
          this.msg = "删除成功";
          this.getUserList();
        }else{
          this.msg = "删除失败";
        }
      });
    }
  }

  edit(){
    if(!this.selectedUser.id){
      this.msg = "请选择用户信息";
    }else{
      this.router.navigate(['/index/tUserUpdate', this.selectedUser.id]);
    }
  }

}