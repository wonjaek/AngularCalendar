import { Component, AfterContentChecked, OnInit} from '@angular/core';
import { CalendarService } from '../calendar.service';

@Component({
  selector: 'app-calendar-week',
  templateUrl: './calendar-week.component.html',
  styleUrls: ['./calendar-week.component.css']
})
export class CalendarWeekComponent implements OnInit {
  private weeks: number[] 

  constructor(private calendarService: CalendarService) {
    this.weeks = this.calendarService.getWeek();
  }

  ngAfterContentChecked() {
    console.log("update Week");
    this.weeks = this.calendarService.getWeek();
  }

  ngOnInit() {
    console.log(this.calendarService.getWeek());
    console.log("weekStarDay:" + this.weeks);
    console.log("today(0~6):" + this.calendarService.getDate().getDay());
    console.log("todate(1~31):" + this.calendarService.getDate().getDate());
  }

}
