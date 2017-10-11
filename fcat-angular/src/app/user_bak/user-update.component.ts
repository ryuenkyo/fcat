import 'rxjs/add/operator/switchMap';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit }      from '@angular/core';
import {UserService} from './user.service';
import {User} from "./user";
import { Location }               from '@angular/common';

@Component({
  templateUrl: './user-update.component.html',
})
export class UserUpdateComponent implements OnInit {
  user:User = new User();
  errorMessage:string;
  firstName:string = '用户管理';
  secondName:string = '用户更新';
  constructor(private userService:UserService,
              private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.userService.getById(+params['id']))
      .subscribe(data => this.user = data.data);
  }

  onSubmit(){
    this.userService.update(this.user)
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
  goBack(): void {
    this.location.back();
  }
}

