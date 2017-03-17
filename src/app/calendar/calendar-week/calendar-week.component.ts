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

  public dateColor(month: number, date: number): string{
    let color: string;
    if(this.nowDate.getDate() == date && (this.nowDate.getMonth()+1) == month) {
      color = "indigo lighten-3";
    } else {
      color = "blue-grey lighten-5";
    } 
    if (this.nowDate.getMonth()== month || (this.nowDate.getMonth()+2) == month) {
      color = "blue-grey lighten-5 grey-text text-lighten-2";
    }
    return color;
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
