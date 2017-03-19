import { Component, AfterContentChecked, OnInit} from '@angular/core';
import { CalendarService } from '../calendar.service';

@Component({
  selector: 'app-calendar-week',
  templateUrl: './calendar-week.component.html',
  styleUrls: ['./calendar-week.component.css']
})
export class CalendarWeekComponent implements OnInit {
  private weeks: Object = new Object();
  private nowDate: Date;

  constructor(private calendarService: CalendarService) {
    this.nowDate = this.calendarService.getNowDate();
    this.weeks = this.calendarService.getWeekArr(this.nowDate);
    
    calendarService.setCalendarType(CalendarService.getCalendarWeekType());
    console.log(this.weeks);
  }

  public createRange(number) {
    var items: number[] = [];
    for (var i = 0; i < number; i++) {
      items.push(i);
    }
    return items;
  }

  ngAfterContentChecked() {
    console.log("update Week");
    this.nowDate = this.calendarService.getNowDate();
    this.weeks = this.calendarService.getWeekArr(this.nowDate);
  }

  ngOnInit() {
  }

}
