import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'epoch'
})
export class EpochPipe implements PipeTransform {

  transform(value: number): string {
    let asDate :Date = new Date(value * 1000);

    return this.roundDate(asDate.toLocaleString());
  }

  roundDate(date : string) : string
  {
    let dateString = date;
    let amOrPm = dateString.substring(dateString.length - 3);
    dateString = dateString.substring(0, dateString.length - 6) + amOrPm;
    return dateString;
  }
}
