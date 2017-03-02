import { Component, OnInit } from '@angular/core';
import { CalendarService } from '../calendar.service';

@Component({
  selector: 'cal-top',
  templateUrl: './calendar-top.component.html',
  styleUrls: ['./calendar-top.component.css'],
  providers: [CalendarService]
})
export class CalendarTopComponent implements OnInit {
  date : string;
  constructor(private calendarService: CalendarService) { 
    this.date = calendarService.getDate();
  }

  ngOnInit() {
  }

}
