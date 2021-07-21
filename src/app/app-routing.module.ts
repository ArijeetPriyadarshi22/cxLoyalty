import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FlightTabComponent } from './flight-tab/flight-tab.component';
import { HotelTabComponent } from './hotel-tab/hotel-tab.component';
import { CarTabComponent } from './car-tab/car-tab.component';
import { ActivityTabComponent } from './activity-tab/activity-tab.component';

const routes: Routes = [
  {path: '', redirectTo: 'flights', pathMatch: 'full'},
  {path: 'flights', component: FlightTabComponent},
  {path: 'hotels', component: HotelTabComponent},
  {path: 'cars', component: CarTabComponent},
  {path: 'activities', component: ActivityTabComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
