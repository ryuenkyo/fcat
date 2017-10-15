import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';

// Imports for loading & configuring the in-memory web api
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService}  from '../in-memory-data.service';

import {IndexComponent}        from './index.component';
import {DashboardComponent}  from './dashboard.component';
import {IndexRoutingModule} from "./index-routing.module";
import {MyAsideComponent} from "./common/my-aside.component";
import { HttpModule, JsonpModule } from '@angular/http';
import {Config} from "../app-config";
import {MyHeaderComponent} from "./common/my-header.component";

import {TUserModule} from "../baseinfo/t-user.module";

@NgModule({
  imports: [BrowserModule, FormsModule,
    IndexRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    HttpModule,
    JsonpModule,
    TUserModule
  ],
  declarations: [IndexComponent, DashboardComponent, MyHeaderComponent,
    MyAsideComponent
     ],
  providers: [
    Config
  ]
})
export class IndexModule {

}
