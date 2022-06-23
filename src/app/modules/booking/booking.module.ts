import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { BookingComponent } from './booking.component';
import { RouterModule } from '@angular/router';
import { BookingRoutes } from './booking-routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlightsModule } from './flights/flights.module';



@NgModule({
  declarations: [
    BookingComponent
  ],
  imports: [
    CommonModule,
    FlightsModule,
    FormsModule,    
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(BookingRoutes)
  ]
})
export class BookingModule { }
