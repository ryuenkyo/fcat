import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import {PaginationConfig} from "./pagination.config";
import {PaginationComponent} from "./pagination.component";



@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [PaginationComponent
     ],
  providers: [PaginationConfig
  ]
})
export class PaginationModule {

}
