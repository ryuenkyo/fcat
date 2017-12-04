import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {TGroupListComponent} from "./t-group-list.component";
import {TGroupAddComponent} from "./t-group-add.component";
import {TGroupUpdateComponent} from "./t-group-update.component";
import {TGroupService} from "./t-group.service";
import {TGroupAddUserComponent} from "./t-group-add-user.component";
import {InfoModule} from "../info/info.module";
import {FormsModule} from "@angular/forms";
import {PaginationModule} from "ngx-bootstrap/index";

@NgModule({
  imports: [BrowserModule, FormsModule,InfoModule,PaginationModule.forRoot() ],
  declarations: [TGroupListComponent,TGroupAddComponent,TGroupUpdateComponent,TGroupAddUserComponent
  ],
  providers: [TGroupService
  ]
})
export class TGroupModule {

}
