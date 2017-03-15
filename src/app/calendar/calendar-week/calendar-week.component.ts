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
    this.weeks = this.calendarService.getWeekArr();
  }

  ngAfterContentChecked() {
    console.log("update Week");
    this.weeks = this.calendarService.getWeekArr();
  }

  ngOnInit() {
    console.log("weekStartDay:" + this.weeks);
    console.log("today(0~6):" + this.calendarService.getNowDate().getDay());
    console.log("todate(1~31):" + this.calendarService.getNowDate().getDate());
  }

}
