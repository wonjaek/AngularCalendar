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
    console.log(this.weeks);
  }

  public isToday(month: number, date: number): string{
    if(this.nowDate.getDate() == date && (this.nowDate.getMonth()+1) == month) {
      return "indigo lighten-3";
    } else {
      return "blue-grey lighten-5";
    }
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
    this.weeks = this.calendarService.getWeekArr(this.nowDate);
    this.nowDate = this.calendarService.getNowDate();
  }

  ngOnInit() {
    // console.log("weekStartDay:" + this.weeks[0]);
    // console.log("today(0~6):" + this.calendarService.getNowDate().getDay());
    // console.log("todate(1~31):" + this.calendarService.getNowDate().getDate());
  }

}
