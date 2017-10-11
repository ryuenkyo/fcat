import { Location }               from '@angular/common';
import {Component} from '@angular/core';
import {UserService} from './user.service';
import {User} from "./user";

@Component({
  templateUrl: './user-add.component.html',
})
export class UserAddComponent {
  user:User = new User();
  data:any;
  errorMessage:any;
  firstName:string = '用户管理';
  secondName:string = '用户添加';
  constructor(private userService:UserService,
              private location: Location) {
  }

  onSubmit(){
    this.userService.add(this.user)
      .subscribe(
        data  => {
          if(data.code == '1001'){
            alert("success");
          }else{
            alert("fail");
          }
        },
        error =>  this.errorMessage = <any>error);
  }
  getJson(){
    return JSON.stringify(this.user);
  }
  goBack(): void {
    this.location.back();
  }
}

