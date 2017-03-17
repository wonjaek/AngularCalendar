import { Injectable } from '@angular/core';

@Injectable()
export class CalendarService {
  private nowDate : Date;

  // first week or last week in this month
  // 0: first week, 1: common week, 2: last week
  private weekState : number; 

  public setDate(year, month, date): void {
    let tDate: Date = this.nowDate;
    this.nowDate.setFullYear(tDate.getFullYear() + year);
    this.nowDate.setMonth(tDate.getMonth() + month);
    this.nowDate.setDate(tDate.getDate() + date);
  }

  constructor() { 
    this.nowDate = new Date();
    this.weekState = 1;
  }

//caution!
  public setNowDate(): void{
    this.nowDate = new Date();
  }

  public getNowDate(): Date {
    return this.nowDate;
  }

  public getNowMonth() {
    return (this.nowDate.getMonth() + 1);
  }

 public setWeekState(weekState: number): void {
    this.weekState = weekState;
  }
  public getWeekState() : number {
    return this.weekState;
  }

  /* get array of weekday */
  public getWeekArr(inputDate: Date): Object {
    let weeks: Object = new Object(); 
    let tempDate = new Date(inputDate);
    let weekStart = this.getWeekFirstDay(tempDate);
    let lastDayOfMonth = this.getMonthLastDay(tempDate);
    let currentMonth = tempDate.getMonth() + 1;

    if((weekStart+6) > lastDayOfMonth && this.getWeekState() != 0) {
      this.setWeekState(2);
    } 

    if(this.getWeekState() == 0) {
      let count = 0;
      for (let i = weekStart; i <= this.getPrevMonthLastDay(tempDate); i++) {
        let dayInfo: Object = new Object();
        dayInfo['month'] = currentMonth - 1;
        dayInfo['day'] = i
        weeks[count] = dayInfo;
        count ++;
      }

      let end = (7-count);
      for (let i = 1; i <= end; i++) {
        let dayInfo: Object = new Object();
        dayInfo['month'] = currentMonth;
        dayInfo['day'] = i
        weeks[count] = dayInfo;
        count ++;
      }
      this.setWeekState(1);
    } else if (this.getWeekState() == 1) {
      let count = 0;
      for (let i = weekStart; i <= weekStart + 6; i++) {
        let dayInfo: Object = new Object();
        dayInfo['month'] = currentMonth;
        dayInfo['day'] = i;
        weeks[count] = dayInfo;
        count++;
      }
      this.setWeekState(1);
    } else {
      let count = 0;
      for (let i = weekStart; i <= lastDayOfMonth; i++) {
        let dayInfo: Object = new Object();
        dayInfo['month'] = currentMonth;
        dayInfo['day'] = i;
        weeks[count] = dayInfo;
        count++;
      }
      let end = (7-count);
      for (let i = 1; i <= end; i++) {
        let dayInfo: Object = new Object();
        dayInfo['month'] = currentMonth + 1;
        dayInfo['day'] = i;
        weeks[count] = dayInfo;
        count++;
      }
      this.setWeekState(1);
    }
    return weeks;
  }

  /* get the first day of input date */
  public getWeekFirstDay(inputDate: Date): number {
    let firstDay: number;
    firstDay = inputDate.getDate() - inputDate.getDay();
    if (firstDay >= 1){
      return firstDay;
    } else {
      firstDay = this.getPrevMonthLastDay(inputDate) - inputDate.getDay() + inputDate.getDate();
      this.setWeekState(0);
      return firstDay;
    }
  }

  /* get the last day of input date */
  public getMonthLastDay(inputDate: Date): number {
    let monthDay: number[] = [31, 28, 31, 30, 31, 31, 30, 31, 30, 31];
    if (((inputDate.getFullYear() % 4 == 0) && (inputDate.getFullYear() % 100 != 0)) || (inputDate.getFullYear() % 400 == 0)) {
      monthDay[1] = 29;
    } else {
      monthDay[1] = 28;
    }
    return monthDay[inputDate.getMonth()];
  }

  /* get the last day of next month */
  public getNextMonthLastDay(inputDate: Date): number {
    let tempDate: Date = new Date(inputDate);
    tempDate.setMonth(inputDate.getMonth() + 1);

    return this.getMonthLastDay(tempDate);
  }

  /* get the last day of prev month */
  public getPrevMonthLastDay(inputDate: Date): number {
    let tempDate: Date = new Date(inputDate);
    tempDate.setMonth(inputDate.getMonth() - 1);

    return this.getMonthLastDay(tempDate);
  }

  public getMonthFirstDay(inputDate: Date): number {
    let tempDate: Date = new Date(inputDate);
    tempDate.setDate(1);
    return tempDate.getDay();
  }

  public getNumOfWeek(inputDate: Date): number {
    let tempDate: Date = new Date(inputDate);
    let tempDay: number;
    let tempLastDay: number;
    tempDate.setDate(1);
    tempDay = tempDate.getDay();
    tempLastDay = this.getMonthLastDay(tempDate);

    if(((tempLastDay==31)&&(tempDay>=5)) || ((tempLastDay==30)&&(tempDay==6))) {
      return 6;
    } else {
      return 5;
    }
  }

  public getMonthArr(): number[] {
    let month: number[] = [];
    let day = this.getMonthLastDay(this.getNowDate());
    for(let i = 1; i <= day; i++) {
      month.push(i);
    }
    return month;
  }
}
