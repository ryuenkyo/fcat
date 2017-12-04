import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';


import {Config} from "../app-config";
import {TUserService} from "./t-user.service";
import {TUserRoutingModule} from "./t-user-routing.module";

import {TUserListComponent} from "./t-user-list.component";
import {PaginationModule} from "ngx-bootstrap/index";
import {TUserAddComponent} from "./t-user-add.component";
import {TUserUpdateComponent} from "./t-user-update.component";
import {InfoModule} from "../info/info.module";
import {TUserGroupService} from "./t-user-group.service";

@NgModule({
  imports: [BrowserModule, FormsModule,TUserRoutingModule,PaginationModule.forRoot(),InfoModule],
  declarations: [TUserListComponent,TUserAddComponent,TUserUpdateComponent
     ],
  providers: [Config,TUserService,TUserGroupService
  ]
})
export class TUserModule {

}
