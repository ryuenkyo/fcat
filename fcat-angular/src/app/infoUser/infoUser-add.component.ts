import { Location }               from '@angular/common';
import {Component} from '@angular/core';
import {InfoUserService} from './infoUser-service';
import {InfoUser} from "./infoUser";

@Component({
  templateUrl: './infoUser-add.component.html',
})
export class InfoUserAddComponent {
  infoUser:InfoUser = new InfoUser();
  data:any;
  errorMessage:any;
  firstName:string = 'InfoUser管理';
  secondName:string = 'InfoUser添加';
  constructor(private infoUserService:InfoUserService,
              private location: Location) {
  }

  onSubmit(){
    this.infoUserService.add(this.infoUser)
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
    return JSON.stringify(this.infoUser);
  }
  goBack(): void {
    this.location.back();
  }
}

