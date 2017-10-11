import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserAddComponent} from "./user-add.component";
import {UserListComponent} from "./user-list.component";
import {UserUpdateComponent} from "./user-update.component";
import {IndexComponent} from "../index/index.component";


const routes: Routes = [/*
  {path: 'index/userList',  component: UserListComponent},
  {path: 'index/userAdd',  component: UserAddComponent},
  {path: 'index/userUpdate/:id',  component: UserUpdateComponent},*/
  {path: 'index',  component: IndexComponent,children: [
    {
      path: 'userList',
      component: UserListComponent
    },
    {
      path: 'userAdd',
      component: UserAddComponent
    },
    {
      path: 'userUpdate/:id',
      component: UserUpdateComponent
    }
  ]}
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class UserRoutingModule {}
