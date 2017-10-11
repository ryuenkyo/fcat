import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';


import {Config} from "../app-config";
import {UserService} from "./user.service";
import {UserRoutingModule} from "./user-routing.module";

import {UserListComponent} from "./user-list.component";
import {UserAddComponent} from "./user-add.component";
import {UserUpdateComponent} from "./user-update.component";
import {PaginationComponent} from "../pagination/pagination.component";
import {PaginationConfig} from "../pagination/pagination.config";
import {MyContentHeaderComponent} from "../view/blocks/my-content-header.component";


@NgModule({
  imports: [BrowserModule, FormsModule,UserRoutingModule],
  declarations: [UserListComponent,UserAddComponent,UserUpdateComponent,PaginationComponent,MyContentHeaderComponent
     ],
  providers: [Config,PaginationConfig,UserService
  ]
})
export class UserModule {

}
