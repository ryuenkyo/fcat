import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {TElementService} from "./t-element.service";
import {TElementUpdateComponent} from "./t-element-update.component";
import {TElementAddComponent} from "./t-element-add.component";
import {InfoModule} from "../info/info.module";
import {PaginationModule} from "ngx-bootstrap/index";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [BrowserModule, FormsModule,InfoModule,PaginationModule.forRoot() ],
  declarations: [TElementUpdateComponent,TElementAddComponent
  ],
  providers: [TElementService
  ]
})
export class TElementModule {

}
