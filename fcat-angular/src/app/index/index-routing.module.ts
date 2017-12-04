import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndexComponent} from "./index.component";
import {TUserListComponent} from "../user/t-user-list.component";
import {TUserAddComponent} from "../user/t-user-add.component";
import {TUserUpdateComponent} from "../user/t-user-update.component";
import {TElementAddComponent} from "../element/t-element-add.component";
import {TElementUpdateComponent} from "../element/t-element-update.component";
import {TMenuListComponent} from "../menu/t-menu-list.component";
import {TMenuAddComponent} from "../menu/t-menu-add.component";
import {TMenuUpdateComponent} from "../menu/t-menu-update.component";
import {TGroupTypeListComponent} from "../groupType/t-group-type-list.component";
import {TGroupTypeUpdateComponent} from "../groupType/t-group-type-update.component";
import {TGroupTypeAddComponent} from "../groupType/t-group-type-add.component";
import {TGroupListComponent} from "../group/t-group-list.component";
import {TGroupAddComponent} from "../group/t-group-add.component";
import {TGroupUpdateComponent} from "../group/t-group-update.component";
import {TGroupAddUserComponent} from "../group/t-group-add-user.component";
import {TGroupAuthorityComponent} from "../authority/t-group-authority.component";
import {TDictComponent} from "../dict/t-dict.component";
import {TDictUpdateComponent} from "../dict/t-dict-update.component";
import {TUserLogComponent} from "../userLog/t-user-log.component";
import {DashboardComponent} from "../dashboard/dashboard.component";
import {TDictAddComponent} from "../dict/t-dict-add.component";



const routes: Routes = [
  {path: 'index',  component: IndexComponent,children: [
    {
      path: 'tUserList',
      component: TUserListComponent
    },
    {
      path: 'tUserAdd',
      component: TUserAddComponent
    },
    {
      path: 'tUserUpdate/:id',
      component: TUserUpdateComponent
    },
    {
      path: 'tElementAdd/:id',
      component: TElementAddComponent
    },
    {
      path: 'tElementUpdate/:id',
      component: TElementUpdateComponent
    },
    {
      path: 'tMenuList',
      component: TMenuListComponent
    },
    {
      path: 'tMenuAdd',
      component: TMenuAddComponent
    },
    {
      path: 'tMenuUpdate/:id',
      component: TMenuUpdateComponent
    },
    {
      path: 'tGroupTypeList',
      component: TGroupTypeListComponent
    },
    {
      path: 'tGroupTypeUpdate/:id',
      component: TGroupTypeUpdateComponent
    },
    {
      path: 'tGroupTypeAdd',
      component: TGroupTypeAddComponent
    },
    {
      path: 'tGroupList',
      component: TGroupListComponent
    },
    {
      path: 'tGroupAdd/:id',
      component: TGroupAddComponent
    },
    {
      path: 'tGroupUpdate/:id',
      component: TGroupUpdateComponent
    },
    {
      path: 'tGroupAddUser/:id',
      component: TGroupAddUserComponent
    },
    {
      path: 'tGroupAuthority/:id',
      component: TGroupAuthorityComponent
    },
    {
      path: 'tDictList',
      component: TDictComponent
    },
    {
      path: 'tDictUpdate/:id',
      component: TDictUpdateComponent
    },
    {
      path: 'tDictAdd',
      component: TDictAddComponent
    },
    {
      path: 'tUserLogList',
      component: TUserLogComponent
    },
    {
      path: 'dashboard',
      component: DashboardComponent
    },
    { path: '**',
      redirectTo: '/index/dashboard',
      pathMatch: 'full'
    }
  ]},
  { path: '**',
    redirectTo: '/index/dashboard',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class IndexRoutingModule {}
