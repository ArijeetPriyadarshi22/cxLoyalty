import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { FlightContentFormData } from 'src/app/services/flight-content-form-data.service';
import { FlightSearchDataService } from 'src/app/services/flights-search-data.service';
import { IflightSearchDetails } from 'src/app/shared/flight-search-details.interface';

@Component({
  selector: 'app-flight-content-form',
  templateUrl: './flight-content-form.component.html',
  styleUrls: ['./flight-content-form.component.scss']
})
export class FlightContentFormComponent implements OnInit {

  flightContentForm!: FormGroup;
  @Output() flightSearchPage = new EventEmitter<string>();
  source: string = '';
  destination: string = '';
  startDate: Date = new Date();
  endDate: Date = new Date();
  allFlights: Array<IflightSearchDetails> = [];
  errorMessage: string = '';

  constructor(private flightSearchDataService: FlightSearchDataService, private flightContentFormData: FlightContentFormData) { }

  ngOnInit(): void {
    this.flightContentForm = new FormGroup({
      'departure': new FormControl(null, Validators.required),
      'destination': new FormControl(null, Validators.required),
      'departdate': new FormControl(null, Validators.required),
      'returndate': new FormControl(null, Validators.required),
      'travelers': new FormControl(null, Validators.required),
      'seatclass': new FormControl(null, Validators.required),
    });
    if (this.flightContentFormData.flightContentSavedData) {
      this.flightContentForm = this.flightContentFormData.flightContentSavedData;
    }
    this.getAllFlights();
  }


  getAllFlights() {
    this.flightSearchDataService.getAllFlights().subscribe(
      allFlights => {
        console.log(allFlights);
        this.allFlights = allFlights;
      },
      error => this.errorMessage = <any>error);

  }

  goToFlightSearch() {
    console.log(this.flightContentForm);
    this.flightSearchDataService.filteredFlights = [];
    this.source = this.flightContentForm.value.departure;
    this.destination = this.flightContentForm.value.destination;
    this.startDate = this.flightContentForm.value.departdate;
    this.endDate = this.flightContentForm.value.returndate;

    if (this.source && this.destination && this.startDate && this.endDate) {
      this.flightSearchDataService.filteredFlights = this.allFlights.filter((x) => {
        console.log(x.startDate)
        let flight = (x.from_city_id == this.source) &&
          (x.to_city_id == this.destination) &&
          (x.startDate == this.startDate) &&
          (x.endDate == this.endDate);

        return flight;
      });
    }
    this.flightContentFormData.flightContentSavedData = this.flightContentForm;
    console.log('service data ' + this.flightContentFormData.flightContentSavedData.value);
    this.flightSearchPage.emit('flightSearch');
  }
}
