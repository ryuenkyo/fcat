import 'rxjs/add/operator/switchMap';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit }      from '@angular/core';
import {InfoUserService} from './infoUser-service';
import {InfoUser} from "./infoUser";
import { Location }               from '@angular/common';

@Component({
  templateUrl: './infoUser-update.component.html',
})
export class InfoUserUpdateComponent implements OnInit {
  infoUser:InfoUser = new InfoUser();
  errorMessage:string;
  firstName:string = 'InfoUser管理';
  secondName:string = 'InfoUser更新';
  constructor(private infoUserService:InfoUserService,
              private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.infoUserService.getById(+params['id']))
      .subscribe(data => this.infoUser = data.data);
  }

  onSubmit(){
    this.infoUserService.update(this.infoUser)
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
  goBack(): void {
    this.location.back();
  }
}

