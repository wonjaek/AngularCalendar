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
    this.firstDay = calendarService.getMonthFirstDay(calendarService.getNowDate());
    this.months = calendarService.getMonthArr();
    this.numOfWeek = Math.round((this.months.length+this.firstDay) / 7);
  }

  public createRange(num: number) : number[] {
    var items: number[] = [];
    for(var i = 1; i <= num; i++) {
      items.push(i);
    }
    return items;
  }

  ngAfterContentChecked() {
    this.firstDay = this.calendarService.getMonthFirstDay(this.calendarService.getNowDate());
    this.months = this.calendarService.getMonthArr();
    this.numOfWeek = Math.round((this.months.length+this.firstDay) / 7);
  }

  ngOnInit() {
    console.log(this.firstDay);
    console.log(this.months);
    console.log(this.numOfWeek);
  }

}
