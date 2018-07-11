import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IndexComponent}        from './index.component';
import {IndexRoutingModule} from "./index-routing.module";
import { HttpModule, JsonpModule } from '@angular/http';
import {Config} from "../app-config";
import {TUserModule} from "../user/t-user.module";
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {AsideComponent} from "../aside/aside.component";
import {TDictModule} from "../dict/t-dict.module";
import {TUserLogModule} from "../userLog/t-user-log.module";
import {HeaderComponent} from "../header/header.component";
import {DashBoardModule} from "../dashboard/dashboard.module";
import {TGroupAuthorityModule} from "../authority/t-group-authority.module";
import {TElementModule} from "../element/t-element.module";
import {TGroupModule} from "../group/t-group.module";
import {TGroupTypeModule} from "../groupType/t-group-type.module";
import {TMenuModule} from "../menu/t-menu.module";


@NgModule({
  imports: [BrowserModule,
    BsDropdownModule.forRoot(),
    IndexRoutingModule,
    HttpModule,
    JsonpModule,
    TUserModule,
    DashBoardModule,
    TMenuModule,
    TGroupTypeModule,
    TGroupModule,
    TElementModule,
    TGroupAuthorityModule,
    TDictModule,
    TUserLogModule
  ],
  declarations: [IndexComponent, HeaderComponent,
    AsideComponent
     ],
  providers: [
    Config
  ]
})
export class IndexModule {

}
