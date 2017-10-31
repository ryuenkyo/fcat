import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndexComponent} from "./index.component";
import {DashboardComponent} from "../baseinfo/dashboard.component";

const routes: Routes = [
  {path: 'index',  component: IndexComponent,children: [
    {
      path: 'dashboard',
      component:DashboardComponent
    },
   {
     path: '',
     redirectTo: 'dashboard',
     pathMatch: 'full'
    }
  ]
  }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class IndexRoutingModule {}
