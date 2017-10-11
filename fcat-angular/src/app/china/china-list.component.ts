import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ChinaService} from './china-service';
import {China} from "./china";
import {PageChangedEvent} from "../pagination/pagination.component";

@Component({
  templateUrl: './china-list.component.html',
})
export class ChinaListComponent implements OnInit {
  chinaList:China[];
  selectedChina:China;
  pageSize:number = 8;
  totalItems:number;
  currentPage:number = 1;
  firstText:string = '首页';
  disabled:boolean;
  maxSize:number = 5;
  firstName:string = 'China管理';
  secondName:string = 'China列表';


  constructor(private router:Router, private chinaService:ChinaService) {
  }

  ngOnInit():void {
      this.getChinaList();
  }

  pageChanged(page:PageChangedEvent) {
    this.currentPage = page.page;
    this.pageSize = page.itemsPerPage;
    this.getChinaList();
  }

  numPages(numPages:number) {
    console.log(numPages);
  }

  onSelect(china:China):void {
    this.selectedChina = china;
  }

  getChinaList():void {
    this.chinaService.getChinaList(this.currentPage, this.pageSize).subscribe(data => {
      console.log(data);
      this.chinaList = data.data.content;
      this.totalItems = data.data.totalElements;
    });
  }


  delete(id:any):void {
    if(window.confirm('你确定要删除记录吗？')){
      this.chinaService.delete(id).subscribe(data => {
        if(data.code==0){
          console.log("删除用户成功");
          this.getChinaList();
        }else{
          console.log("删除用户失败");
        }
      });
    }
  }

  edit(id:any){
    this.router.navigate(['/index/chinaUpdate', id]);
  }

}
