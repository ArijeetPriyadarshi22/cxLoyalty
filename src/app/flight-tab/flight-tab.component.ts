import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-tab',
  templateUrl: './flight-tab.component.html',
  styleUrls: ['./flight-tab.component.scss']
})
export class FlightTabComponent implements OnInit {

  pageSelector = 'flightContent';
  constructor() { }

  ngOnInit(): void {
  }

  onPageSwitch(data :string){
     this.pageSelector =data ;
     console.log(this.pageSelector)
  }
}
