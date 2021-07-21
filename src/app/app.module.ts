import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ModalModule } from './modal-window';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TabSelectorComponent } from './tab-selector/tab-selector.component';
import { FlightTabComponent } from './flight-tab/flight-tab.component';
import { HotelTabComponent } from './hotel-tab/hotel-tab.component';
import { CarTabComponent } from './car-tab/car-tab.component';
import { ActivityTabComponent } from './activity-tab/activity-tab.component';
import { FlightContentFormComponent } from './flight-tab/flight-content-form/flight-content-form.component';
import { FlightSearchComponent } from './flight-tab/flight-search/flight-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TabSelectorComponent,
    FlightTabComponent,
    HotelTabComponent,
    CarTabComponent,
    ActivityTabComponent,
    FlightContentFormComponent,
    FlightSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ModalModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
