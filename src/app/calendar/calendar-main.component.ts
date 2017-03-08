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
  
  ngOnInit() {
  }

}
