import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';


import {Config} from "../app-config";
import {InfoUserService} from "./infoUser-service";
import {InfoUserRoutingModule} from "./infoUser-routing.module";

import {InfoUserListComponent} from "./infoUser-list.component";
import {InfoUserAddComponent} from "./infoUser-add.component";
import {InfoUserUpdateComponent} from "./infoUser-update.component";
import { PaginationModule } from 'ngx-bootstrap/pagination';

@NgModule({
  imports: [BrowserModule, FormsModule,InfoUserRoutingModule,PaginationModule.forRoot()],
  declarations: [InfoUserListComponent,InfoUserAddComponent,InfoUserUpdateComponent
     ],
  providers: [Config,InfoUserService
  ]
})
export class InfoUserModule {

}
