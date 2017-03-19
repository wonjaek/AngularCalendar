import { Component, OnInit } from '@angular/core';
import { CalendarService } from '../calendar.service';

@Component({
  selector: 'cal-side',
  templateUrl: './calendar-side.component.html',
  styleUrls: ['./calendar-side.component.css'],
  providers: [CalendarService]
})
export class CalendarSideComponent implements OnInit {
  private nowDate: Date;
  private numOfWeek: number;
  private weeks;

  constructor(private calendarService: CalendarService) { 
    this.nowDate = calendarService.getNowDate();
    this.numOfWeek = this.calendarService.getNumOfWeek(this.nowDate);
    this.weeks = calendarService.getMonthCalendar(this.nowDate);
  }
  
  public getNowMonth() {
    return (this.nowDate.getMonth()+1);
  }
  public getNowFullYear() {
    return this.nowDate.getFullYear();
  }

  public createRange(number) {
    var items: number[] = [];
    for (var i = 0; i < number; i++) {
      items.push(i);
    }
    return items;
  }

  ngOnInit() {
  }

}
