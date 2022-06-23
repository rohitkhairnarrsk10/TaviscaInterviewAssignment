import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AIRPORT_LIST, MockData, TRAVELERS, TRAVEL_CLASS } from 'src/app/shared/constants/contants';


export interface TravelFormGroup {
  departure: FormControl<string>;
  destination: FormControl<string>;
  departDate: FormControl<Date>; //? makes controls as optional
  returnDate: FormControl<Date>;//? makes controls as optional
}

@Component({
  selector: 'app-search-flights',
  templateUrl: './search-flights.component.html',
  styleUrls: ['./search-flights.component.scss']
})
export class SearchFlightsComponent implements AfterViewInit {
  @Input() data: any;
  AIRPORT_LIST = AIRPORT_LIST;
  TRAVEL_CLASS = TRAVEL_CLASS;
  TRAVELERS = TRAVELERS;
  todaysDate = new Date();
  isSearched: boolean = false;
  queryResponse: any;
  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }

  constructor(private fb: FormBuilder, private cdr: ChangeDetectorRef) { }

  travelForm = this.fb.group({
    departure: ["", [Validators.required]],
    destination: ["", [Validators.required]],
    departDate: [this.todaysDate.toISOString().slice(0, 10), [Validators.required]],
    returnDate: [new Date(this.todaysDate.setDate(this.todaysDate.getDate() + 1)).toISOString().slice(0, 10), [Validators.required]],
    traveler: [TRAVELERS[0], [Validators.required]],
    class: [TRAVEL_CLASS[0], [Validators.required]],
  });

  onSubmitContactForm() {
    console.log(this.travelForm.value);
    this.travelForm.markAllAsTouched();
    if (this.travelForm.value.departure && this.travelForm.value.departure && this.travelForm.value.departure === this.travelForm.value.destination) {
      alert("Departure and Destination should be different!!");
      return;
    }
    if (this.travelForm.invalid) {
      return;
    }

    const filteredData: any = [];
    MockData.filter((item) => {
      return new Date(item.departDate + "").toDateString() == new Date(this.travelForm.value.departDate + "").toDateString() && new Date(item.returnDate + "").toDateString() == new Date(this.travelForm.value.returnDate + "").toDateString()
    }).forEach((item) => {
      let data = { ...item }
      data.seatingClasses = [...item.seatingClasses.filter((classItem) => classItem.parentId == this.travelForm.value.class?.id)];
      filteredData.push(data);
    });

    this.queryResponse = { searchQuery: this.travelForm.value, response: filteredData };
    this.toggleSearchPanel();
    console.log(this.queryResponse);
  }

  departureChanged(event: any) {
    console.log(event);
  }
  onDepartDateChanged() {
    const departureDate = new Date(this.travelForm.value.departDate + "");
    this.travelForm.get('returnDate')?.setValue(new Date(departureDate.setDate(departureDate.getDate() + 1)).toISOString().slice(0, 10));
  }

  toggleSearchPanel() {
    this.isSearched = this.isSearched ? false : true;
    this.travelForm.reset();
  }


}
