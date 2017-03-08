import { Component, AfterContentChecked, OnInit } from '@angular/core';
import { CalendarService } from '../calendar.service'

@Component({
  selector: 'app-calendar-month',
  templateUrl: './calendar-month.component.html',
  styleUrls: ['./calendar-month.component.css']
})
export class CalendarMonthComponent implements OnInit {
  private months: number[];
  private firstDay: number;
  private monthDate: number;
  private numOfWeek: number;

  constructor(private calendarService: CalendarService) {
    this.firstDay = calendarService.getMonthFirstDay(calendarService.getDate());
    this.months = calendarService.getMonthArr();
    this.numOfWeek = Math.floor(this.months.length / 7);
  }

  public createRange() : number[] {
    var items: number[] = [];
    for(var i = 1; i <= this.numOfWeek; i++) {
      items.push(i);
    }
    return items;
  }

  ngOnInit() {
    console.log(this.firstDay);
    console.log(this.months);
    console.log(this.numOfWeek);
  }

}
