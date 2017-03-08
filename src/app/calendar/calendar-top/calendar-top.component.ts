import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CalendarService } from '../calendar.service';

@Component({
  selector: 'cal-top',
  templateUrl: './calendar-top.component.html',
  styleUrls: ['./calendar-top.component.css']
})
export class CalendarTopComponent implements OnInit {
  active = false;

  constructor(private calendarService: CalendarService) { 
  }

  public setToDay() : void{
    this.calendarService.setToDay();
  }

  public setNextDay() : void{
    this.calendarService.setDate(0, 0, 1);
  }

  public setPrevDay() : void{
    this.calendarService.setDate(0, 0, -1);
  }

  
  ngOnInit() {
  }

}
