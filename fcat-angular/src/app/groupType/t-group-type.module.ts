import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {TGroupTypeListComponent} from "./t-group-type-list.component";
import {TGroupTypeUpdateComponent} from "./t-group-type-update.component";
import {TGroupTypeAddComponent} from "./t-group-type-add.component";
import {TGroupTypeService} from "./t-group-type.service";
import {InfoModule} from "../info/info.module";
import {FormsModule} from "@angular/forms";
import {PaginationModule} from "ngx-bootstrap/index";

@NgModule({
  imports: [BrowserModule, FormsModule,InfoModule,PaginationModule.forRoot() ],
  declarations: [TGroupTypeListComponent,TGroupTypeUpdateComponent,TGroupTypeAddComponent
  ],
  providers: [TGroupTypeService
  ]
})
export class TGroupTypeModule {

}
