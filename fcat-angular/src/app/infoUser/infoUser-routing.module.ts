import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InfoUserAddComponent} from "./infoUser-add.component";
import {InfoUserListComponent} from "./infoUser-list.component";
import {InfoUserUpdateComponent} from "./infoUser-update.component";
import {IndexComponent} from "../index/index.component";


const routes: Routes = [/*
  {path: 'index/infoUserList',  component: InfoUserListComponent},
  {path: 'index/infoUserAdd',  component: InfoUserAddComponent},
  {path: 'index/infoUserUpdate/:id',  component: InfoUserUpdateComponent},*/
  {path: 'index',  component: IndexComponent,children: [
    {
      path: 'infoUserList',
      component: InfoUserListComponent
    },
    {
      path: 'infoUserAdd',
      component: InfoUserAddComponent
    },
    {
      path: 'infoUserUpdate/:id',
      component: InfoUserUpdateComponent
    }
  ]}
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class InfoUserRoutingModule {}
