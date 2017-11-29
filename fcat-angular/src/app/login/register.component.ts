
import {Component, OnInit} from '@angular/core';
import {Config} from "../app-config";
import {LoginService} from "./Login.service";
import {Router} from "@angular/router";
import {TUserService} from "../baseinfo/t-user.service";
import {TUser} from "../baseinfo/t-user";

@Component({
  selector: 'my-app',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit{
  msg:string;
  app:any;
  tUser:TUser=new TUser();
  constructor(private router:Router,
              private config:Config,
              private tUserService:TUserService){
    this.app = config.appConfig;
  }
  ngOnInit(){
  }

  check(user:TUser){
    let result =true;
    if(!user.username){
      this.msg = '用户名不能为空';
      result = false;
    }
    if(!user.password){
      this.msg = '密码不能为空';
      result = false;
    }
    if(!user.mobilePhone){
      this.msg = '手机号不能为空';
      result = false;
    }
    return result;
  }
  register(){
    this.check(this.tUser);
    this.tUserService.add(this.tUser).subscribe(data =>{
      if(data.code == 0){
        this.router.navigate(['/login']);
      }
    });
  }
}
