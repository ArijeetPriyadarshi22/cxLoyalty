import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ModalService } from 'src/app/modal-window';
import { FlightContentFormData } from 'src/app/services/flight-content-form-data.service';
import { FlightSearchDataService } from 'src/app/services/flights-search-data.service';
import { IflightSearchDetails } from 'src/app/shared/flight-search-details.interface';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.scss']
})
export class FlightSearchComponent implements OnInit {

  @Output() flightContentPage = new EventEmitter<string>();
  sortMethodForm!: FormGroup;
  searchfilteredFlights: Array<IflightSearchDetails> = [];
  flightSearchContentData!: FormGroup;
  searchStartCity: string = '';
  searchArrivalCity: string = '';
  searchDepartDate: Date = new Date();
  searchReturnDate: Date = new Date();
  searchNumberofTravelers: number = 1;

  sortMethods = ['Price (Lowest to Highest)' , 'Price (Highest to Lowest)' , 'Duration (Shortest to Longest)' ,
  'Duration (Longest to Shortest)' , 'Departure (Earliest to Latest)' , 'Arrival (Earliest to Latest)' ,
   'Airline (A to Z)' , 'Airline (Z to A)' ] ;


  constructor(private flightSearchDataService: FlightSearchDataService, private flightContentFormData: FlightContentFormData,
    private modalService: ModalService) { }

  ngOnInit(): void {

    this.sortMethodForm = new FormGroup({
      'sortMethod' : new FormControl(null)
    });

    this.flightSearchContentData = this.flightContentFormData.flightContentSavedData;
    this.searchStartCity = this.flightSearchContentData.value.departure;
    this.searchArrivalCity = this.flightSearchContentData.value.destination;
    this.searchDepartDate = this.flightSearchContentData.value.departdate;
    this.searchReturnDate = this.flightSearchContentData.value.returndate;
    this.searchNumberofTravelers = this.flightSearchContentData.value.travelers;
    this.searchfilteredFlights = this.flightSearchDataService.filteredFlights;
    console.log('search' + JSON.stringify(this.searchfilteredFlights));
  }

  goToFlightContent() {
    this.flightContentPage.emit('flightContent');
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  sortSeachFlight(id: string) {
    this.modalService.close(id);
    switch(this.sortMethodForm.controls.sortMethod.value){
      case 'Price (Lowest to Highest)': {
       return this.searchfilteredFlights.sort((a,b) =>{
         let x =a.basicEconomyPrice;
         let y =b.basicEconomyPrice;

         if(x<y){
           return -1 ;
         }
         else{
           return 1;
         }
       });
       break ;
      }

      case 'Price (Highest to Lowest)': {
        return this.searchfilteredFlights.sort((a,b) =>{
          let x =a.basicEconomyPrice;
          let y =b.basicEconomyPrice;

          if(x>y){
            return -1 ;
          }
          else{
            return 1;
          }
        });
        break ;
       }

       case 'Duration (Shortest to Longest)': {
        return this.searchfilteredFlights.sort((a,b) =>{
          let x =a.duration.toLowerCase();
          let y =b.duration.toLowerCase();

          if(x>y){
            return 1 ;
          }
          else{
            return -1;
          }
        });
        break ;
       }

       case 'Duration (Longest to Shortest)': {
        return this.searchfilteredFlights.sort((a,b) =>{
          let x =a.duration.toLowerCase();
          let y =b.duration.toLowerCase();

          if(x>y){
            return -1 ;
          }
          else{
            return 1;
          }
        });
        break ;
       }

       case 'Departure (Earliest to Latest)': {
        return this.searchfilteredFlights.sort((a,b) =>{
          let x =a.depart.toLowerCase();
          let y =b.depart.toLowerCase();

          if(x>y){
            return 1 ;
          }
          else{
            return -1;
          }
        });
        break ;
       }

       case 'Arrival (Earliest to Latest)': {
        return this.searchfilteredFlights.sort((a,b) =>{
          let x =a.arrive.toLowerCase();
          let y =b.arrive.toLowerCase();

          if(x>y){
            return 1 ;
          }
          else{
            return -1;
          }
        });
        break ;
       }


       case 'Airline (A to Z)': {
        return this.searchfilteredFlights.sort((a,b) =>{
          let x =a._id.toLowerCase();
          let y =b._id.toLowerCase();

          if(x>y){
            return 1 ;
          }
          else{
            return -1;
          }
        });
        break ;
       }

       case 'Airline (Z to A)': {
        return this.searchfilteredFlights.sort((a,b) =>{
          let x =a._id.toLowerCase();
          let y =b._id.toLowerCase();

          if(x>y){
            return -1 ;
          }
          else{
            return 1;
          }
        });
        break ;
       }

       default: {
        return;
      }

    }


  }
}
