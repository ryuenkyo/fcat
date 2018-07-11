import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import {Config} from "../app-config";
import {TDictComponent} from "./t-dict.component";
import {TDictService} from "./t-dict.service";
import {TDictUpdateComponent} from "./t-dict-update.component";
import {TDictAddComponent} from "./t-dict-add.component";
import {PaginationModule} from "ngx-bootstrap/index";
import {TDictRoutingModule} from "./t-dict-routing.module";
import {TUserService} from "../user/t-user.service";
import {InfoModule} from "../info/info.module";

@NgModule({
  imports: [BrowserModule, FormsModule,PaginationModule.forRoot(),TDictRoutingModule,InfoModule],
  declarations: [
    TDictComponent,TDictUpdateComponent,TDictAddComponent
  ],
  providers: [Config,TDictService,TUserService
  ]
})
export class TDictModule {

}
