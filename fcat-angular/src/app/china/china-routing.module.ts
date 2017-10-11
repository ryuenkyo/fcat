import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChinaAddComponent} from "./china-add.component";
import {ChinaListComponent} from "./china-list.component";
import {ChinaUpdateComponent} from "./china-update.component";
import {IndexComponent} from "../index/index.component";


const routes: Routes = [/*
  {path: 'index/chinaList',  component: ChinaListComponent},
  {path: 'index/chinaAdd',  component: ChinaAddComponent},
  {path: 'index/chinaUpdate/:id',  component: ChinaUpdateComponent},*/
  {path: 'index',  component: IndexComponent,children: [
    {
      path: 'chinaList',
      component: ChinaListComponent
    },
    {
      path: 'chinaAdd',
      component: ChinaAddComponent
    },
    {
      path: 'chinaUpdate/:id',
      component: ChinaUpdateComponent
    }
  ]}
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class ChinaRoutingModule {}
