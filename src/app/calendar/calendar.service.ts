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

  public updateWeek() : void{
    this.weekStart = this.getDate().getDate() - this.getDate().getDay();
    console.log("update:" + this.weekStart);
  }

  public getWeek(): number[] {
    this.updateWeek();
    let weeks: number[] = [];
    for(let i = this.weekStart; i <= this.weekStart+6; i++) {
      weeks.push(i);
    }
    return weeks;
  }


}
