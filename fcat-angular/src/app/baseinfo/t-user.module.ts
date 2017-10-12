import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';


import {Config} from "../app-config";
import {TUserService} from "./t-user.service";
import {TUserRoutingModule} from "./t-user-routing.module";

import {TUserListComponent} from "./t-user-list.component";
import {PaginationModule} from "ngx-bootstrap/index";
import {TMenuListComponent} from "./t-menu-list.component";
import {TMenuService} from "./t-menu.service";
import {TElementService} from "./t-element.service";
import {TGroupTypeListComponent} from "./t-group-type-list.component";
import {TGroupTypeService} from "./t-group-type.service";
import {TGroupService} from "./t-group.service";
import {TUserAddComponent} from "./t-user-add.component";
import {TUserUpdateComponent} from "./t-user-update.component";
import {TUserMockService} from "./t-user-mock.service";
import {InfoComponent} from "../info/info.component";
import {TElementMockService} from "./t-element-mock.service";
import {TMenuMockService} from "./t-menu-mock.service";

import { AmexioWidgetModule,CommonHttpService } from 'amexio-ng-extensions';
import {TMenuAddComponent} from "./t-menu-add.component";
import {TMenuUpdateComponent} from "./t-menu-update.component";
import {TElementAddComponent} from "./t-element-add.component";
import {TElementUpdateComponent} from "./t-element-update.component";
import {TGroupTypeMockService} from "./t-group-type-mock.service";
import {TGroupTypeUpdateComponent} from "./t-group-type-update.component";
import {TGroupTypeAddComponent} from "./t-group-type-add.component";
import {TGroupListComponent} from "./t-group-list.component";
import {TGroupMockService} from "./t-group-mock.service";
import {TGroupAddComponent} from "./t-group-add.component";
import {TGroupUpdateComponent} from "./t-group-update.component";

@NgModule({
  imports: [BrowserModule, FormsModule,TUserRoutingModule,PaginationModule.forRoot(),AmexioWidgetModule],
  declarations: [TUserListComponent,TUserAddComponent,TUserUpdateComponent,
    TMenuListComponent,TMenuAddComponent,TMenuUpdateComponent,
    TElementAddComponent,TElementUpdateComponent,
    TGroupTypeListComponent,TGroupTypeUpdateComponent,TGroupTypeAddComponent,
    TGroupListComponent,TGroupAddComponent,TGroupUpdateComponent,
    InfoComponent
     ],
  providers: [Config,TUserService,TMenuService,TElementService,TGroupTypeService,TGroupService,TUserMockService,
    TElementMockService,TMenuMockService,CommonHttpService,TGroupTypeMockService,TGroupMockService
  ]
})
export class TUserModule {

}
