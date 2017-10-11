import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';


import {Config} from "../app-config";
import {UserService} from "./user.service";
import {UserRoutingModule} from "./user-routing.module";

import {UserListComponent} from "./user-list.component";
import {UserAddComponent} from "./user-add.component";
import {UserUpdateComponent} from "./user-update.component";
import {PaginationModule} from "ngx-bootstrap/index";

@NgModule({
  imports: [BrowserModule, FormsModule,UserRoutingModule,PaginationModule.forRoot()],
  declarations: [UserListComponent,UserAddComponent,UserUpdateComponent
     ],
  providers: [Config,UserService,
  ]
})
export class UserModule {

}
