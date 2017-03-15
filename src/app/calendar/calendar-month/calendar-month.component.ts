import { Component, AfterContentChecked, OnInit } from '@angular/core';
import { CalendarService } from '../calendar.service'

@Component({
  selector: 'app-calendar-month',
  templateUrl: './calendar-month.component.html',
  styleUrls: ['./calendar-month.component.css']
})
export class CalendarMonthComponent implements OnInit {
  private months: number[];
  private firstDay: number;
  private monthDate: number;
  private numOfWeek: number;
  private nowDate: Date;
  private weeks: Object = new Object(); 

  constructor(private calendarService: CalendarService) {
    this.firstDay = calendarService.getMonthFirstDay(calendarService.getNowDate());
    this.months = calendarService.getMonthArr();
    this.numOfWeek = Math.round((this.months.length+this.firstDay) / 7);
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
    console.log("test");
    for(let i = 0; i < inputRange; i++) {
      seed = 1 + (7 * i);
      if (seed > this.calendarService.getMonthLastDay(tempDate)) {
        break;
      }
      tempDate.setDate(seed);
      weeks[i] = (this.calendarService.getWeekArr(tempDate));
    }
    console.log(weeks);
    return weeks;
  }

  public isToday(month: number, date: number): string{
    if(this.nowDate.getDate() == date && (this.nowDate.getMonth()+1) == month) {
      return "indigo lighten-3";
    } else {
      return "blue-grey lighten-5";
    }
  }


  ngAfterContentChecked() {
    this.firstDay = this.calendarService.getMonthFirstDay(this.calendarService.getNowDate());
    this.months = this.calendarService.getMonthArr();
    this.numOfWeek = Math.round((this.months.length+this.firstDay) / 7);
    this.weeks = this.setWeeks(this.calendarService.getNowDate(), this.numOfWeek);
  }

  ngOnInit() {
    // console.log(this.firstDay);
    // console.log(this.months);
    // console.log(this.numOfWeek);
  }

}
