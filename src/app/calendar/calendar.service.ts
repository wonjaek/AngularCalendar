import { Injectable } from '@angular/core';

@Injectable()
export class CalendarService {
  private nowDate : Date;
  private weekStart: number;

  public setDate(year, month, date): void {
    let tDate: Date = this.nowDate;
    this.nowDate.setFullYear(tDate.getFullYear() + year);
    this.nowDate.setMonth(tDate.getMonth() + month);
    this.nowDate.setDate(tDate.getDate() + date);
  }

  constructor() { 
    this.nowDate = new Date();
  }

  public setToDay(): void{
    this.nowDate = new Date();
  }

  public getDate(): Date {
    return this.nowDate;
  }

  public getWeekArr(): number[] {
    this.weekStart = this.getDate().getDate() - this.getDate().getDay();
    let weeks: number[] = [];
    for(let i = this.weekStart; i <= this.weekStart+6; i++) {
      weeks.push(i);
    }
    return weeks;
  }

  public getMonthLastDays(inputDate: Date): number {
    let monthDay: number[] = [31, 28, 31, 30, 31, 31, 30, 31, 30, 31];
    if (((inputDate.getFullYear() % 4 == 0) && (inputDate.getFullYear() % 100 != 0)) || (inputDate.getFullYear() % 400 == 0)) {
      monthDay[1] = 29;
    } else {
      monthDay[1] = 28;
    }
    return monthDay[inputDate.getMonth()];
  }
  
  public getMonthFirstDay(inputDate: Date): number {
    let tDate: Date = inputDate;
    tDate.setDate(1);
    return tDate.getDay();
  }

  public getMonthArr(): number[] {
    let month: number[] = [];
    let day = this.getMonthLastDays(this.getDate());
    for(let i = 1; i <= day; i++) {
      month.push(i);
    }
    return month;
  }
}
