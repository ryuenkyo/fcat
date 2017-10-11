/**
 * Created by F1 on 2017/6/1.
 */
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from './user.service';
import {User} from "./user";
import {PageChangedEvent} from "../pagination/pagination.component";

@Component({
  templateUrl: './user-list.component.html',
})
export class UserListComponent implements OnInit {
  userList:User[];
  selectedUser:User;
  pageSize:number = 8;
  totalItems:number;
  currentPage:number = 1;
  firstText:string = '首页';
  disabled:boolean;
  firstName:string = '用户管理';
  secondName:string = '用户列表';
  maxSize:number = 5;


  constructor(private router:Router, private userService:UserService) {
  }

  ngOnInit():void {
      this.getUserList();
  }

  pageChanged(page:PageChangedEvent) {
    this.currentPage = page.page;
    this.pageSize = page.itemsPerPage;
    this.getUserList();
  }

  numPages(numPages:number) {
    console.log(numPages);
  }

  onSelect(user:User):void {
    this.selectedUser = user;
  }

  getUserList():void {
    this.userService.getUserList(this.currentPage, this.pageSize).subscribe(data => {
      console.log(data);
      this.userList = data.data.content;
      this.totalItems = data.data.totalElements;
    });
  }


  delete(userId:string):void {
    if(window.confirm('你确定要删除记录吗？')){
      this.userService.delete(userId).subscribe(data => {
        if(data.code==0){
          console.log("删除用户成功");
          this.getUserList();
        }else{
          console.log("删除用户失败");
        }
      });
    }
  }

  edit(id:number){
    this.router.navigate(['/index/userUpdate', id]);
  }

}
