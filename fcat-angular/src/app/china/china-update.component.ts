import 'rxjs/add/operator/switchMap';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit }      from '@angular/core';
import {ChinaService} from './china-service';
import {China} from "./china";
import { Location }               from '@angular/common';

@Component({
  templateUrl: './china-update.component.html',
})
export class ChinaUpdateComponent implements OnInit {
  china:China = new China();
  errorMessage:string;
  firstName:string = 'China管理';
  secondName:string = 'China更新';
  constructor(private chinaService:ChinaService,
              private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.chinaService.getById(+params['id']))
      .subscribe(data => this.china = data.data);
  }

  onSubmit(){
    this.chinaService.update(this.china)
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

