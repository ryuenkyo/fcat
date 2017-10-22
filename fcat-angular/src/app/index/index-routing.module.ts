import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndexComponent} from "./index.component";

const routes: Routes = [
  {path: 'index',  component: IndexComponent,children: [
   {
     path: '',
     redirectTo: '/index/dashboard',
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
