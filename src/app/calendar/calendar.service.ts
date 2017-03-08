import { Injectable } from '@angular/core';

@Injectable()
export class CalendarService {
  nowDay : Date;

  setDate(year, month, date) {
    let tDate: Date = this.nowDay;
    this.nowDay.setFullYear(tDate.getFullYear() + year);
    this.nowDay.setMonth(tDate.getMonth() + month);
    this.nowDay.setDate(tDate.getDate() + date);
  }

  setToDay() {
    this.nowDay = new Date();
  }

  getDate() {
    return this.nowDay;
  }

  getWeek() {
    var weeks = [];
    weeks.push();
    
  }
  constructor() { 
    this.setToDay();
  }

}
