import { Component, OnInit } from '@angular/core';

/*declare var $:any;*/
@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})



export class DashboardComponent implements  OnInit{
  ngOnInit(){
    /*$("#dash").html("<p>this is a string from jQuery html setting</p>");*/
  }
}
