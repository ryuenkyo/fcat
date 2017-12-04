import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {TGroupAuthorityComponent} from "./t-group-authority.component";
import {AmexioWidgetModule,CommonHttpService} from "amexio-ng-extensions";
import {InfoModule} from "../info/info.module";

@NgModule({
  imports: [BrowserModule,
    AmexioWidgetModule,InfoModule ],
  declarations: [TGroupAuthorityComponent
  ],
  providers: [CommonHttpService
  ]
})
export class TGroupAuthorityModule {

}
