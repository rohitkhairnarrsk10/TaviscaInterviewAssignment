import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  providers: [DatePipe]
})
export class SearchResultsComponent implements OnInit {
  @Input() QueryResponse: any;
  @Output() back: EventEmitter<any> = new EventEmitter();
  constructor(private datePipe: DatePipe) { }

  ngOnInit(): void {
  }
}
