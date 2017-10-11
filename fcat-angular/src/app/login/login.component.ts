import {Component, OnInit} from "@angular/core";
import {Config} from "../app-config";
import {Router} from '@angular/router';
import {LoginService} from "./login.service";
import {LoginUser} from "./LoginUser";
import {TUserMockService} from "../baseinfo/t-user-mock.service";

declare var $:any;
declare var RSAUtils:any;
@Component({
  templateUrl: './login.component.html'
})

export class LoginComponent implements  OnInit{
  msg:string;
  app:any;
  loginUser:LoginUser = new LoginUser();
  constructor(private config:Config,
              private router:Router,
              private loginService:LoginService,
              private tUserMockService:TUserMockService) {
    this.app = config.appConfig;

    this.loginUser.username = 'xiaoliu';
    this.loginUser.password = '123456';
  }
  ngOnInit(){
    $('input').iCheck({
      checkboxClass: 'icheckbox_square-blue',
      radioClass: 'iradio_square-blue',
      increaseArea: '20%' // optional
    });
  }
  login():any{
    let username = this.loginUser.username;
    let password = this.loginUser.password;

    console.log(this.loginUser);
    this.tUserMockService.login(username,password).then(data =>{
      if (data.data) {
        let sessionInfo = JSON.parse(localStorage.getItem("sessionInfo"));
        if(!sessionInfo){
          sessionInfo = {username:username};
          localStorage.setItem('sessionInfo',JSON.stringify(sessionInfo));
        }
        this.router.navigate(['../index']);
      } else{
        this.msg = '登录失败';
        setTimeout(()=>{this.msg=''},1500);
      }
      ;
    })
  }
}
