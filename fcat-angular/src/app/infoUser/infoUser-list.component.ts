import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {InfoUserService} from './infoUser-service';
import {InfoUser} from "./infoUser";
import {PageChangedEvent} from "../pagination/pagination.component";

@Component({
  templateUrl: './infoUser-list.component.html',
})
export class InfoUserListComponent implements OnInit {
  infoUserList:InfoUser[];
  selectedInfoUser:InfoUser;
  pageSize:number = 8;
  totalItems:number;
  currentPage:number = 1;
  firstText:string = '首页';
  disabled:boolean;
  maxSize:number = 5;
  firstName:string = 'InfoUser管理';
  secondName:string = 'InfoUser列表';


  constructor(private router:Router, private infoUserService:InfoUserService) {
  }

  ngOnInit():void {
      this.getInfoUserList();
  }

  pageChanged(page:PageChangedEvent) {
    this.currentPage = page.page;
    this.pageSize = page.itemsPerPage;
    this.getInfoUserList();
  }

  numPages(numPages:number) {
    console.log(numPages);
  }

  onSelect(infoUser:InfoUser):void {
    this.selectedInfoUser = infoUser;
  }

  getInfoUserList():void {
    this.infoUserService.getInfoUserList(this.currentPage, this.pageSize).subscribe(data => {
      console.log(data);
      this.infoUserList = data.data.content;
      this.totalItems = data.data.totalElements;
    });
  }


  delete(id:any):void {
    if(window.confirm('你确定要删除记录吗？')){
      this.infoUserService.delete(id).subscribe(data => {
        if(data.code==0){
          console.log("删除用户成功");
          this.getInfoUserList();
        }else{
          console.log("删除用户失败");
        }
      });
    }
  }

  edit(id:any){
    this.router.navigate(['/index/infoUserUpdate', id]);
  }

}
