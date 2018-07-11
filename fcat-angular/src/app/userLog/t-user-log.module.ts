import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {Config} from "../app-config";
import {TUserLogComponent} from "./t-user-log.component";
import {TUserLogService} from "./t-user-log.service";
import {InfoModule} from "../info/info.module";
import {PaginationModule} from "ngx-bootstrap/index";

@NgModule({
  imports: [BrowserModule, FormsModule,PaginationModule.forRoot(),InfoModule],
  declarations: [
    TUserLogComponent
     ],
  providers: [Config,TUserLogService
  ]
})
export class TUserLogModule {

}
