import { Component, OnInit } from '@angular/core';
import { CalendarService } from '../calendar.service';

@Component({
  selector: 'cal-top',
  templateUrl: './calendar-top.component.html',
  styleUrls: ['./calendar-top.component.css'],
  providers: [CalendarService]
})
export class CalendarTopComponent implements OnInit {
  private nowDate : string;

  constructor(private calendarService: CalendarService) { 
    this.nowDate = calendarService.getDate().toDateString();
  }

  setToDay() {
    this.calendarService.setToDay();
    this.nowDate = this.calendarService.getDate().toDateString();
  }

  setNextDay() {
    this.calendarService.setDate(0, 0, 1);
    this.nowDate = this.calendarService.getDate().toDateString();
  }

  setPrevDay() {
    this.calendarService.setDate(0, 0, -1);
    this.nowDate = this.calendarService.getDate().toDateString();
  }

  
  ngOnInit() {
  }

}
