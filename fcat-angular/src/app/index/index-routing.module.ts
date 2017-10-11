import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard.component';
import {IndexComponent} from "./index.component";
import {ChinaListComponent} from "../china/china-list.component";
import {ChinaAddComponent} from "../china/china-add.component";
import {ChinaUpdateComponent} from "../china/china-update.component"; 

const routes: Routes = [
  {path: 'index',  component: IndexComponent,children: [
   {
      path: '',
      component: DashboardComponent
    },
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

  ]
  }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class IndexRoutingModule {}
