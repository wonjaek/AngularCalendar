import { Injectable } from '@angular/core';

enum CalendarType {Day, Week, Month}
@Injectable()
export class CalendarService {
  private nowDate : Date;
  private numOfWeek: number;

  // first week or last week in this month
  // 0: first week, 1: common week, 2: last week
  private weekState : number; 
  private calendarType : CalendarType;

  public setCalendarType(type) {
    this.calendarType = type;
  }

  public static getCalendarMonthType()
  {
    return CalendarType.Month;
  }

  public static getCalendarDayType()
  {
    return CalendarType.Day;
  }

  public static getCalendarWeekType()
  {
    return CalendarType.Week;
  }

  public setDate(year: number, month : number, date:number) : void
  {
    this.nowDate.setFullYear(year);
    this.nowDate.setMonth(month);
    this.nowDate.setDate(date);
  }
  public setAddDate(year, month, date): void {
    let tDate: Date = this.nowDate;
    this.nowDate.setFullYear(tDate.getFullYear() + year);
    this.nowDate.setMonth(tDate.getMonth() + month);
    this.nowDate.setDate(tDate.getDate() + date);
  }

  constructor() { 
    this.nowDate = new Date();
    this.weekState = 1;
  }

/**
 * Return days of this month.
 * @param inputDate current day
 */
  public currentMonthDays(inputDate: Date)
  {
    let monthDay: number[] = [31, 28, 31, 30, 31, 31, 30, 31, 30, 31];
    if (((inputDate.getFullYear() % 4 == 0) && (inputDate.getFullYear() % 100 != 0)) || (inputDate.getFullYear() % 400 == 0)) {
      monthDay[1] = 29;
    } else {
      monthDay[1] = 28;
    }
    return monthDay[inputDate.getMonth()];
  }

  public setPrev() : void
  {
    switch(this.calendarType) {
      case CalendarType.Day: 
        this.setAddDate(0, 0, -1); break;
      case CalendarType.Week: 
        this.setAddDate(0, 0, -7); break;
      case CalendarType.Month: 
        this.setAddDate(0, -1, 0); break;
    }
  }
  public setNext() : void
  {
    switch(this.calendarType) {
      case CalendarType.Day: 
        this.setAddDate(0, 0, 1); break;
      case CalendarType.Week: 
        this.setAddDate(0, 0, 7); break;
      case CalendarType.Month: 
        this.setAddDate(0, 1, 0); break;
    }
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

  public getMonthCalendar(inputDate: Date) : Object {
    let weeks = []; 
    let seed: number = 1;
    let tempDate: Date = new Date(inputDate);
    let range = this.getNumOfWeek(inputDate);

    tempDate.setDate(1);
    tempDate.setDate( tempDate.getDate() - tempDate.getDay() );
    
    for(let i = 0; i < range; i++) {
      let week = []
      for(let j = 0; j < 7; j++) {
        let dayInfo: Object = new Object();

        dayInfo['day'] = tempDate.getDate();
        dayInfo['month'] = tempDate.getMonth();
        dayInfo['year'] = tempDate.getFullYear();
        tempDate.setDate(tempDate.getDate() + 1);
        week.push(dayInfo);
      }
      weeks.push(week);
    }
    //console.log(weeks);
    return weeks;

  }

  
  /* get array of weekday */
  //Deprecated by Wonjae Kim
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


  public dateColor(year: number, month: number, date: number): string {
    let color: string;
    let curDate = this.nowDate;

    if ( curDate.getDate() == date && 
          curDate.getMonth() == month &&
          curDate.getFullYear() == year ) {
      color = "indigo lighten-3";
    } else if (curDate.getMonth() == month &&
            curDate.getFullYear() == year) { // || curDate.getFullYear() != year) {
      color = "";
    } else {
      color = "grey-text text-lighten-2";
    }
    return color;
  }

}

