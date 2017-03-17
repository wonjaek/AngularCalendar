import { Component, AfterContentChecked, OnInit } from '@angular/core';
import { CalendarService } from '../calendar.service'

@Component({
  selector: 'app-calendar-month',
  templateUrl: './calendar-month.component.html',
  styleUrls: ['./calendar-month.component.css']
})
export class CalendarMonthComponent implements OnInit {
  private nowDate: Date;
  private numOfWeek: number;
  private weeks;

  constructor(private calendarService: CalendarService) {
    this.nowDate = calendarService.getNowDate();
    this.numOfWeek = calendarService.getNumOfWeek(this.nowDate);
    this.weeks = this.setWeeks(calendarService.getNowDate(), this.numOfWeek);
    this.nowDate = calendarService.getNowDate();
  }

  public createRange(number) {
    var items: number[] = [];
    for (var i = 0; i < number; i++) {
      items.push(i);
    }
    return items;
  }

  public setWeeks (inputDate: Date, inputRange: number) : Object {
    let weeks: Object = new Object(); 
    let seed: number = 1;
    let tempDate: Date = new Date(inputDate);
    for(let i = 0; i < inputRange; i++) {
      seed = 1 + (7 * i);
      tempDate.setDate(seed);
      weeks[i] = (this.calendarService.getWeekArr(tempDate));
      if (seed > this.calendarService.getMonthLastDay(tempDate)) {
        break;
      }
    }
    return weeks;
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


  ngAfterContentChecked() {
    this.nowDate = this.calendarService.getNowDate();
    this.numOfWeek = this.calendarService.getNumOfWeek(this.nowDate);
    this.weeks = this.setWeeks(this.calendarService.getNowDate(), this.numOfWeek);
  }

  ngOnInit() {
  }

}
