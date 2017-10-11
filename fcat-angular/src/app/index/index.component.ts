
import {Component, OnInit} from '@angular/core';
import {Config} from "../app-config";

declare var $:any;
@Component({
  selector: 'my-app',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})


export class IndexComponent implements OnInit{
  app:any;
  constructor(private config:Config){
    this.app = config.appConfig;
  }
  ngOnInit(){
    $.widget.bridge('uibutton', $.ui.button);
  }
}
