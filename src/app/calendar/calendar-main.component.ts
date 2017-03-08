import { Input, Component, OnInit } from '@angular/core';
import { CalendarService } from './calendar.service';

@Component({
  selector: 'cal-main',
  templateUrl: './calendar-main.component.html',
  styleUrls: ['./calendar-main.component.css'],
  providers: [CalendarService]
})
export class CalendarMainComponent implements OnInit {
  constructor(private calendarService: CalendarService) { 
  }
  
  outputEvent(active: boolean) {
    if(active) {
      console.log(active);
      console.log("event date: " + this.calendarService.getDate());
      this.calendarService.updateWeek();
      console.log(this.calendarService.getWeek());
    }
  }



  ngOnInit() {
  }

}
