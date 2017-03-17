import { Component, AfterContentChecked, OnInit } from '@angular/core';
import { CalendarService } from '../calendar.service'

@Component({
  selector: 'app-calendar-month',
  templateUrl: './calendar-month.component.html',
  styleUrls: ['./calendar-month.component.css']
})
export class CalendarMonthComponent implements OnInit {
  private nowDate: Date;
  private numOfWeek: number;
  private weeks;

  constructor(private calendarService: CalendarService) {
    this.nowDate = calendarService.getNowDate();
    this.weeks = calendarService.getMonthCalendar(this.nowDate);
    this.nowDate = calendarService.getNowDate();
  }

  public createRange(number) {
    var items: number[] = [];
    for (var i = 0; i < number; i++) {
      items.push(i);
    }
    return items;
  }

  ngAfterContentChecked() {
    this.nowDate = this.calendarService.getNowDate();
    this.numOfWeek = this.calendarService.getNumOfWeek(this.nowDate);
    this.weeks = this.calendarService.getMonthCalendar(this.nowDate);
  }

  ngOnInit() {
  }

}
