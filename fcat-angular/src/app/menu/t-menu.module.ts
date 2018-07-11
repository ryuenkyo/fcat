import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {TMenuService} from "../menu/t-menu.service";
import {TMenuListComponent} from "../menu/t-menu-list.component";
import {TMenuAddComponent} from "../menu/t-menu-add.component";
import {TMenuUpdateComponent} from "../menu/t-menu-update.component";
import {AmexioWidgetModule,CommonHttpService} from "amexio-ng-extensions";
import {InfoModule} from "../info/info.module";
import {FormsModule} from "@angular/forms";
import {PaginationModule} from "ngx-bootstrap/index";

@NgModule({
  imports: [BrowserModule, FormsModule,InfoModule,PaginationModule.forRoot(),
    AmexioWidgetModule ],
  declarations: [TMenuListComponent,TMenuAddComponent,TMenuUpdateComponent
  ],
  providers: [TMenuService,CommonHttpService
  ]
})
export class TMenuModule {

}
