import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';


import {Config} from "../app-config";
import {ChinaService} from "./china-service";
import {ChinaRoutingModule} from "./china-routing.module";

import {ChinaListComponent} from "./china-list.component";
import {ChinaAddComponent} from "./china-add.component";
import {ChinaUpdateComponent} from "./china-update.component";
import { PaginationModule } from 'ngx-bootstrap/pagination';

@NgModule({
  imports: [BrowserModule, FormsModule,ChinaRoutingModule,PaginationModule.forRoot()],
  declarations: [ChinaListComponent,ChinaAddComponent,ChinaUpdateComponent
     ],
  providers: [Config,ChinaService
  ]
})
export class ChinaModule {

}
