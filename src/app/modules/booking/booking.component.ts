import { Component, OnInit } from '@angular/core';
import { AdTab } from 'src/app/shared/components/tab-factory/tab-factory.component';
import { WorkInProgressComponent } from 'src/app/shared/components/work-in-progress/work-in-progress.component';
import {  SearchFlightsComponent } from './flights/search-flights/search-flights.component';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  tabs : AdTab[]= [];
  constructor() { }

  ngOnInit(): void {
    this.tabs =this.getAds();
  }
  getAds() {
    return [
      new AdTab(
        SearchFlightsComponent,
        { icon: "fa-solid fa-jet-fighter-up", name: "Flights" }
      ),
      new AdTab(
        WorkInProgressComponent,
        { icon: "fa-solid fa-hotel", name: "Hotels" }
      ),
      new AdTab(
        WorkInProgressComponent,
        { icon: "fa-solid fa-car", name: "Cars" }
      ),
     
    ];
  }
}
