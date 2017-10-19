import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';


import {AppComponent}        from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {Config} from "./app-config";
import {IndexModule} from "./index/index.module";
import {HttpUtil} from "./util/http.util";

@NgModule({
  imports: [BrowserModule,
    AppRoutingModule,IndexModule],
  declarations: [AppComponent
     ],
  providers: [
    Config,HttpUtil
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
