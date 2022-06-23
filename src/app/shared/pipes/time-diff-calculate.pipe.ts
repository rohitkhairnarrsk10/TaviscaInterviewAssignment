import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import { DatePipe } from '@angular/common';
@Pipe({
  name: 'timeDiffCalculate'
})
export class TimeDiffCalculatePipe implements PipeTransform {
  constructor(private datePipe: DatePipe) { }

  transform(departDate: string, returnDate: string): unknown {
    var now = this.datePipe.transform(new Date(departDate), 'dd/MM/yyyy HH:mm:ss')
    var then = this.datePipe.transform(new Date(returnDate), 'dd/MM/yyyy HH:mm:ss');
    var ms = moment(then, "DD/MM/YYYY HH:mm:ss").diff(moment(now, "DD/MM/YYYY HH:mm:ss"));
    var data = this.datePipe.transform(moment.duration(ms).asSeconds(), "HH:mm");
    return data;
  }

}
