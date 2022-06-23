import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFlightsComponent } from './search-flights/search-flights.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchResultsComponent } from './search-results/search-results.component';

@NgModule({
  declarations: [
    SearchFlightsComponent,
    SearchResultsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,    
    ReactiveFormsModule,
    SharedModule,
  ],
  exports: [SearchFlightsComponent,SearchResultsComponent]
})
export class FlightsModule { }
