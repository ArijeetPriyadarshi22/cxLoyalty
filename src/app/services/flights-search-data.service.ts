import { Injectable } from '@angular/core';
import { HttpClient ,HttpErrorResponse  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError } from 'rxjs/operators';
import { IflightSearchDetails } from '../shared/flight-search-details.interface';

@Injectable({providedIn: 'root'})
export class FlightSearchDataService{

   filteredFlights: Array<IflightSearchDetails> =[];

	flightUrl:string = '../../assets/data/flight-data.json';

    constructor( private http: HttpClient){}

     getAllFlights(): Observable<IflightSearchDetails[]>{

        return this.http.get<IflightSearchDetails[]>(this.flightUrl).pipe(
            catchError(this.handleError));
     }

     private handleError(err:HttpErrorResponse) {
        let errMsg:string='';
        if (err.error instanceof Error) {
           // A client-side or network error occurred. Handle it accordingly.
           console.log('An error occurred:', err.error.message);
           let errMsg=err.error.message;} 
           else {
           console.log(`Backend returned code ${err.status}`);
             let errMsg=err.error.status;
         }
            return throwError(errMsg);
      }
}