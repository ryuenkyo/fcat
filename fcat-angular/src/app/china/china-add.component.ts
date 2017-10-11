import { Location }               from '@angular/common';
import {Component} from '@angular/core';
import {ChinaService} from './china-service';
import {China} from "./china";

@Component({
  templateUrl: './china-add.component.html',
})
export class ChinaAddComponent {
  china:China = new China();
  data:any;
  errorMessage:any;
  firstName:string = 'China管理';
  secondName:string = 'China添加';
  constructor(private chinaService:ChinaService,
              private location: Location) {
  }

  onSubmit(){
    this.chinaService.add(this.china)
      .subscribe(
        data  => {
          if(data.code == 0){
            alert("success");
          }else{
            alert("fail");
          }
        },
        error =>  this.errorMessage = <any>error);
  }
  getJson(){
    return JSON.stringify(this.china);
  }
  goBack(): void {
    this.location.back();
  }
}

