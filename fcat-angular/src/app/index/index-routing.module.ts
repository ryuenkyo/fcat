import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard.component';
import {IndexComponent} from "./index.component";

const routes: Routes = [
  {path: 'index',  component: IndexComponent,children: [
   {
      path: '',
      component: DashboardComponent
    }

  ]
  }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class IndexRoutingModule {}
